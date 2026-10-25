import { useEffect, useRef, useState } from "react";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";
const INTERACTIVE = "a, button, [role='button'], .resume-circle-container";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Only render on devices with a real mouse; touch screens get nothing.
  const [enabled, setEnabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia(FINE_POINTER).matches
  );

  useEffect(() => {
    const query = window.matchMedia(FINE_POINTER);
    const onChange = (event) => setEnabled(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = 0;
    let y = 0;
    let frame = 0;
    let visible = false;
    let hovering = false;
    let recheckHover = false;

    const place = () => {
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      ring.style.left = `${x}px`;
      ring.style.top = `${y}px`;
    };

    const setVisible = (value) => {
      if (value === visible) return;
      visible = value;
      dot.classList.toggle("is-visible", value);
      ring.classList.toggle("is-visible", value);
    };

    const setHovering = (element) => {
      const value = element instanceof Element && element.closest(INTERACTIVE) !== null;
      if (value === hovering) return;
      hovering = value;
      dot.classList.toggle("is-hovering", value);
      ring.classList.toggle("is-hovering", value);
    };

    // One DOM write per frame, however many mousemove events arrive.
    const render = () => {
      frame = 0;
      place();
      if (recheckHover) {
        recheckHover = false;
        setHovering(document.elementFromPoint(x, y));
      }
    };
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        place(); // first move: put it under the pointer BEFORE it fades in
        setVisible(true);
      }
      setHovering(event.target);
      queue();
    };

    // Page scrolling moves content under a still mouse without firing mousemove.
    const onScroll = () => {
      if (!visible) return;
      recheckHover = true;
      queue();
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
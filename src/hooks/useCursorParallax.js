import {useEffect, useRef} from "react";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";
const NO_MOTION = "(prefers-reduced-motion: reduce)";

/**
 * Lets a section react to the mouse. It writes two CSS variables on the element,
 * --mx and --my, each between -1 (cursor at the left/top edge) and 1 (right/bottom edge),
 * and resets them to 0 when the cursor leaves. The CSS decides what moves and by how much
 * (App.css, "Cursor parallax"), and its transition makes the movement slow and smooth.
 *
 *   const ref = useCursorParallax();
 *   <section ref={ref}> ... </section>
 *
 * Touch devices and visitors who prefer reduced motion get nothing. The listener is
 * throttled to one write per animation frame and does no React rendering.
 */
export const useCursorParallax = () => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element || typeof window === "undefined") return;
        if (!window.matchMedia(FINE_POINTER).matches || window.matchMedia(NO_MOTION).matches) return;

        let frame = 0;
        let event = null;

        const apply = () => {
            frame = 0;
            if (!event) return;
            const rect = element.getBoundingClientRect();
            if (!rect.width || !rect.height) return;
            const clamp = (v) => Math.max(-1, Math.min(1, v));
            element.style.setProperty("--mx", clamp(((event.clientX - rect.left) / rect.width) * 2 - 1).toFixed(3));
            element.style.setProperty("--my", clamp(((event.clientY - rect.top) / rect.height) * 2 - 1).toFixed(3));
        };

        const onMove = (e) => {
            event = e;
            if (!frame) frame = requestAnimationFrame(apply);
        };

        const onLeave = () => {
            event = null;
            element.style.setProperty("--mx", "0");
            element.style.setProperty("--my", "0");
        };

        element.addEventListener("mousemove", onMove);
        element.addEventListener("mouseleave", onLeave);
        return () => {
            element.removeEventListener("mousemove", onMove);
            element.removeEventListener("mouseleave", onLeave);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return ref;
};
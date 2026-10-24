import {Children, Fragment, useCallback, useEffect, useRef, useState} from "react";
import {useScrollSubscription} from "../hooks/useParallaxScroll";

const COPIES = 3;        // content is rendered 3x: [A][B][C] — we always sit inside B
const MAX_REPEAT = 12;   // safety cap for very short strips

/**
 * Horizontal strip that
 *   1. advances when the PAGE scrolls (same 0.75 feel as before),
 *   2. can be scrolled by the user (swipe / trackpad / shift+wheel / mouse drag),
 *   3. continues from wherever the user left it (no snapping back), and
 *   4. loops forever: the DOM is a fixed 3 copies, and whenever the scroll
 *      position drifts into copy A or C it is silently moved by exactly one
 *      copy-width, which looks identical because the copies are identical.
 *
 * Usage:
 *   <InfiniteStrip className="image-container" label="Project screenshots">
 *     {items.map(...)}
 *   </InfiniteStrip>
 *
 * Items must be flex-friendly (the track is a flex row) and should not carry
 * their own gaps outside the item — use margin on the item itself.
 */
export const InfiniteStrip = ({children, className = "", speed = 0.75, label}) => {
    const items = Children.toArray(children);

    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const copyWidth = useRef(0);   // width of ONE copy in px
    const position = useRef(0);    // our own fractional scrollLeft (browsers may round the real one)
    const lastWritten = useRef(0); // last value we wrote to scrollLeft
    const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
    const repeatRef = useRef(1);
    const lastDragX = useRef(null);

    // How many times the item list repeats INSIDE one copy. Normally 1; a short
    // list (e.g. a skills strip) repeats until one copy is wider than the screen.
    const [repeat, setRepeat] = useState(1);
    const [dragging, setDragging] = useState(false);
    repeatRef.current = repeat;

    // If the browser's scrollLeft differs from what we last wrote, the user (or
    // momentum scrolling) moved it — adopt their position instead of ours.
    const adopt = useCallback(() => {
        const el = viewportRef.current;
        if (el && Math.abs(el.scrollLeft - lastWritten.current) > 1) {
            position.current = el.scrollLeft;
        }
    }, []);

    // Fold the position back into the middle copy and write it to the element.
    const commit = useCallback(() => {
        const el = viewportRef.current;
        const w = copyWidth.current;
        if (!el || !w) return;

        let p = position.current;
        if (p < w || p >= 2 * w) {
            p = w + (((p - w) % w) + w) % w;
        }
        position.current = p;
        el.scrollLeft = p;
        lastWritten.current = p;
    }, []);

    // User scrolling: only intervene when they've crossed into copy A or C.
    const onScroll = () => {
        adopt();
        const w = copyWidth.current;
        if (w && (position.current < w || position.current >= 2 * w)) {
            commit();
        }
    };

    // Page scrolling: move by the DELTA, so manual positions are respected.
    useScrollSubscription((y) => {
        const dy = y - lastScrollY.current;
        lastScrollY.current = y;
        if (!dy || !copyWidth.current) return;

        adopt();
        position.current += dy * speed;
        commit();
    });

    const measure = useCallback(() => {
        const track = trackRef.current;
        if (!track || track.children.length < COPIES) return;

        const w = track.children[1].getBoundingClientRect().left -
                  track.children[0].getBoundingClientRect().left;
        if (w <= 0) return;

        const previous = copyWidth.current;
        if (!previous) {
            copyWidth.current = w;
            position.current = w;            // start on the middle copy
            commit();
        } else if (Math.abs(w - previous) > 0.5) {
            // Images finished loading / viewport resized: keep the same relative spot.
            adopt();
            const within = position.current - previous;
            copyWidth.current = w;
            position.current = w + within * (w / previous);
            commit();
        }

        const unit = w / repeatRef.current;
        const needed = Math.ceil((window.innerWidth * 1.25) / unit);
        setRepeat(Math.min(MAX_REPEAT, Math.max(1, needed)));
    }, [adopt, commit]);

    useEffect(() => {
        measure();
        const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
        if (observer && trackRef.current) observer.observe(trackRef.current);
        window.addEventListener("resize", measure);
        return () => {
            if (observer) observer.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, [measure]);

    // Mouse drag (touch and trackpads already scroll natively).
    const onPointerDown = (e) => {
        if (e.pointerType !== "mouse" || e.button !== 0) return;
        lastDragX.current = e.clientX;
        e.currentTarget.setPointerCapture(e.pointerId);
        setDragging(true);
    };
    const onPointerMove = (e) => {
        if (lastDragX.current === null) return;
        e.currentTarget.scrollLeft -= e.clientX - lastDragX.current;
        lastDragX.current = e.clientX;
    };
    const endDrag = () => {
        if (lastDragX.current === null) return;
        lastDragX.current = null;
        setDragging(false);
    };

    return (
        <div
            ref={viewportRef}
            className={`infinite-strip${dragging ? " is-dragging" : ""} ${className}`.trim()}
            onScroll={onScroll}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            tabIndex={0}
            aria-label={label}>
            <div className="infinite-strip-track" ref={trackRef}>
                {Array.from({length: COPIES}, (_, copy) => (
                    <div
                        className="infinite-strip-copy"
                        key={copy}
                        aria-hidden={copy === 1 ? undefined : true}>
                        {Array.from({length: repeat}, (_, r) => (
                            <Fragment key={r}>{items}</Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
import {Children, Fragment, useCallback, useEffect, useRef, useState} from "react";
import {useScrollSubscription} from "../../hooks/useParallaxScroll";
import "./InfiniteStrip.css";

const COPIES = 3;
const MAX_REPEAT = 12;

export const InfiniteStrip = ({children, className = "", speed = 0.75, label}) => {
    const items = Children.toArray(children);

    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const copyWidth = useRef(0);
    const position = useRef(0);
    const lastWritten = useRef(0);
    const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
    const repeatRef = useRef(1);
    const lastDragX = useRef(null);
    const touching = useRef(false);
    const busyUntil = useRef(0);
    const wrapTimer = useRef(null);

    const [repeat, setRepeat] = useState(1);
    const [dragging, setDragging] = useState(false);
    repeatRef.current = repeat;

    const adopt = useCallback(() => {
        const el = viewportRef.current;
        if (el && Math.abs(el.scrollLeft - lastWritten.current) > 1) {
            position.current = el.scrollLeft;
        }
    }, []);

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

    const onScroll = () => {
        const el = viewportRef.current;
        if (!el || Math.abs(el.scrollLeft - lastWritten.current) <= 1) return;

        busyUntil.current = performance.now() + 200;
        adopt();

        const w = copyWidth.current;
        if (w && (position.current < w || position.current >= 2 * w)) {
            clearTimeout(wrapTimer.current);
            const settle = () => {
                if (touching.current || performance.now() < busyUntil.current) {
                    wrapTimer.current = setTimeout(settle, 120);
                } else {
                    adopt();
                    commit();
                }
            };
            wrapTimer.current = setTimeout(settle, 150);
        }
    };

    useScrollSubscription((y) => {
        const dy = y - lastScrollY.current;
        lastScrollY.current = y;
        if (!dy || !copyWidth.current) return;

        if (touching.current || performance.now() < busyUntil.current) return;

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
            position.current = w;
            commit();
        } else if (Math.abs(w - previous) > 0.5) {
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
            clearTimeout(wrapTimer.current);
        };
    }, [measure]);

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
            onTouchStart={() => { touching.current = true; }}
            onTouchEnd={() => { touching.current = false; }}
            onTouchCancel={() => { touching.current = false; }}
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

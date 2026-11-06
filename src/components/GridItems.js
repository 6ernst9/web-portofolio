import {useLayoutEffect, useRef, useState} from "react";

export const GridItems = () => {
    const ref = useRef(null);
    const [count, setCount] = useState(60);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return undefined;

        const measure = () => {
            const style = getComputedStyle(el);
            const cols = parseInt(style.getPropertyValue("--cols"), 10) || 10;
            const inset = parseFloat(style.getPropertyValue("--inset")) || 110;
            const ratio = parseFloat(style.getPropertyValue("--ratio")) || 1;
            const minRow = ((window.innerWidth - inset) / cols) * ratio;
            const rows = Math.max(1, Math.floor(el.clientHeight / minRow));
            setCount(cols * (rows + 1));
        };

        measure();
        const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
        if (observer) observer.observe(el);
        window.addEventListener("resize", measure);
        return () => {
            if (observer) observer.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, []);

    return (
        <div className="grid-container" ref={ref}>
            {Array.from({length: count}).map((_, i) => (
                <div className="grid-item" key={i}></div>
            ))}
        </div>
    );
};
import {useEffect, useRef, useState} from "react";

/**
 * Tells you when an element has scrolled into view, ONCE (it never goes back to false, so
 * reveal animations play a single time per visit).
 *
 *   const [ref, inView] = useInView();
 *   <section ref={ref} className={inView ? "is-visible" : ""}>
 *
 * One IntersectionObserver per element and no scroll listener, so it does not add to the
 * shared scroll provider's work. Without IntersectionObserver support it reports true
 * straight away, so nothing stays hidden.
 */
export const useInView = (threshold = 0.25) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        if (typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, {threshold});

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
};
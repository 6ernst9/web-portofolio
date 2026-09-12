import { createContext, useContext, useEffect, useRef, useState } from "react";

const ScrollContext = createContext(0);

/**
 * Wrap the app once (see App.js) with this provider. It owns the ONE
 * window scroll listener for the whole page, throttled to one update
 * per animation frame, and broadcasts the current scrollY to every
 * section via context.
 *
 * Previously each section (About, Contact, Letify, Resume, Socially,
 * Thesis, Warlords...) mounted its own independent scroll listener
 * and its own requestAnimationFrame loop. Individually throttling
 * each one wasn't enough — with ~8 separate rAF callbacks all reacting
 * to the same scroll events, they can drift out of sync across frames,
 * so multiple independent re-render batches end up competing for the
 * same animation frame. That's what shows up as scrolling briefly
 * "sticking" and then catching up in a burst. A single shared listener
 * removes the redundancy and keeps every section's offset in lockstep
 * on one frame.
 */
export const ScrollProvider = ({ children }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (ticking.current) return;

            ticking.current = true;
            requestAnimationFrame(() => {
                // Clamp to 0 so iOS rubber-band/bounce overscroll (which can
                // briefly report a negative scrollY) doesn't snap the
                // sliding text to a jarring offset.
                setScrollPosition(Math.max(0, window.scrollY));
                ticking.current = false;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ScrollContext.Provider value={scrollPosition}>
            {children}
        </ScrollContext.Provider>
    );
};

/**
 * Reads the shared scroll position from ScrollProvider and exposes a
 * ready-made calculateOffset helper, so sections don't need to
 * duplicate that math either. Same call signature as before
 * (`const {calculateOffset} = useParallaxScroll();`) — no changes
 * needed in any component that already uses this hook.
 */
export const useParallaxScroll = (speedMultiplier = 0.75) => {
    const scrollPosition = useContext(ScrollContext);

    const calculateOffset = (direction = 'right') => {
        const offset = scrollPosition * speedMultiplier;
        return direction === 'right' ? offset : -offset;
    };

    return { scrollPosition, calculateOffset };
};
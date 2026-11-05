import {useEffect, useRef} from "react";
import footer from "../assets/img/footer.svg";

// Last block of the page, after Contact. The artwork (purple, the logo mark and the name in black,
// cut off by the bottom edge) is one SVG image, see the footer rules in App.css. The spacer is the
// empty stretch at the end of the page that the fixed footer shows through.
//
// The footer is fixed under the page, so on a phone a very fast flick can show it for a moment
// through tiles of the page that are not painted yet (Contact is the section right above it). It is
// therefore hidden until the spacer, the empty stretch at the very end, is about to come into view.
// The class is switched straight on the element (not through React state), so it changes in the same
// frame as the scroll, and the image is decoded in advance so it is ready to be drawn.
export const Footer = () => {
    const spacerRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const img = new Image();
        img.src = footer;
        if (img.decode) img.decode().catch(() => {});
    }, []);

    useEffect(() => {
        const spacer = spacerRef.current;
        const element = footerRef.current;
        if (!spacer || !element || typeof IntersectionObserver === "undefined") {
            if (element) element.classList.remove("footer-away");
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => element.classList.toggle("footer-away", !entry.isIntersecting),
            {rootMargin: "0px 0px 30% 0px"}
        );
        observer.observe(spacer);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="footer-spacer" ref={spacerRef} aria-hidden="true" />
            <footer className="footer footer-away" ref={footerRef} role="contentinfo">
                <img className="footer-img" src={footer} alt="Ernst Robert" />
            </footer>
        </>
    );
};
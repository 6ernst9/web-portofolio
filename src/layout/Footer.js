import {useEffect, useRef} from "react";
import footer from "../assets/img/brand/footer.svg";
import "./Footer.css";

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

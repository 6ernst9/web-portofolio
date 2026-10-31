import footer from "../assets/img/footer.svg";

export const Footer = () => (
    <>
        <div className="footer-spacer" aria-hidden="true" />
        <footer className="footer" role="contentinfo">
            <img className="footer-img" src={footer} alt="Ernst Robert" />
        </footer>
    </>
);
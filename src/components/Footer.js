import logo from "../assets/img/logo.svg";

export const Footer = () => (
    <footer className="footer" role="contentinfo">
        <div className="footer-brand" role="img" aria-label="Ernst Robert">
            <img className="footer-logo" src={logo} alt="" aria-hidden="true" />
            <span className="footer-name" aria-hidden="true">ERNST</span>
        </div>
    </footer>
);
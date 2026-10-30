// Last block of the page, after Contact: the logo mark and the name, black on the site's purple,
// cut off by the bottom edge of the page. (The mark is the "E" of logo.svg, without its circle.)
export const Footer = () => (
    <footer className="footer" role="contentinfo">
        <div className="footer-brand" role="img" aria-label="Ernst Robert">
            <svg className="footer-logo" viewBox="0 52.7 792 685.5" aria-hidden="true" focusable="false">
                <g transform="matrix(0.24,0,0,0.24,0,0)">
                    <g transform="matrix(0.867314,0,0,0.850423,247.381,572.629)">
                        <path d="M1617.2,3046.02l-1509.97,-2667.28l3019.93,0l-278.56,492.063l-1905.69,-0l137.49,242.87l1630.71,-0l-257.616,455.066l-557.12,0l0.551,-0.972l-559.464,-0l279.732,494.132l140.8,-248.716l557.12,-0l-697.92,1232.84Z" />
                    </g>
                </g>
            </svg>
            <span className="footer-name" aria-hidden="true">ERNST</span>
        </div>
    </footer>
);
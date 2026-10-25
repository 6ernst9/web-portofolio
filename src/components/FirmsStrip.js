import betfairFull from "../assets/img/betfair-full.webp";
import pokerstarsFull from "../assets/img/pokerstars-full.webp";
import sisalFull from "../assets/img/sisal-full.webp";
import paddypowerFull from "../assets/img/paddypower-full.webp";
import skybetFull from "../assets/img/sky-full.webp";
import skyvegasFull from "../assets/img/skyvegas-full.webp";

// Former employers, in display order. Paddy Power, Sky Bet and Sky Vegas share the Betfair
// stack. On narrow screens the LAST ones drop out first (Sky Vegas, then Sky Bet, then
// Paddy Power): the row is one logo tall and anything that wraps is clipped (see App.css).
const firms = [
    {name: "Betfair", full: betfairFull},
    {name: "PokerStars", full: pokerstarsFull},
    {name: "SISAL", full: sisalFull},
    {name: "Paddy Power", full: paddypowerFull},
    {name: "Sky Bet", full: skybetFull},
    {name: "Sky Vegas", full: skyvegasFull}
];

/**
 * Row of former-employer logos, spread across the full width. It is absolutely positioned;
 * the host section places it through `className` (e.g. "resume-firms" in App.css).
 */
export const FirmsStrip = ({className = ""}) => (
    <ul className={`firms-strip ${className}`.trim()} aria-label="Companies I have worked with">
        {firms.map((firm) => (
            <li className="firms-strip-item" key={firm.name}>
                <img src={firm.full} alt={firm.name} loading="lazy" decoding="async" />
            </li>
        ))}
    </ul>
);
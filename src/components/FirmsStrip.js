import {InfiniteStrip} from "./InfiniteStrip";
import betfairFull from "../assets/img/betfair-full.png";
import pokerstarsFull from "../assets/img/pokerstars-full.png";
import sisalFull from "../assets/img/sisal-full.png";
import paddypowerFull from "../assets/img/paddypower-full.png";
import skybetFull from "../assets/img/sky-full.png";

// Former employers, in display order. Paddy Power and Sky Bet share the Betfair stack.
const firms = [
    {name: "Betfair", full: betfairFull},
    {name: "PokerStars", full: pokerstarsFull},
    {name: "SISAL", full: sisalFull},
    {name: "Paddy Power", full: paddypowerFull},
    {name: "Sky Bet", full: skybetFull}
];

/**
 * Former-employer logos as an infinite carousel, same behaviour as the Projects strip:
 * it moves with the page scroll, can be swiped / dragged by hand, and loops forever.
 * It is absolutely positioned; the host section places it through `className`
 * (e.g. "resume-firms" in App.css).
 */
export const FirmsStrip = ({className = ""}) => (
    <InfiniteStrip className={`firms-strip ${className}`.trim()} label="Companies I have worked with">
        {firms.map((firm) => (
            <img className="firms-strip-item" src={firm.full} alt={firm.name} key={firm.name} draggable={false} />
        ))}
    </InfiniteStrip>
);
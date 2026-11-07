import "./PageHero.css";
import {Block} from "./Block";
import {useParallaxScroll} from "../hooks/useParallaxScroll";

export const PageHero = ({slide, title, lead, children}) => {
    const {calculateOffset} = useParallaxScroll();

    return (
        <>
            <div className="page-sliding" aria-hidden="true">
                <span className="page-sliding-text" style={{transform: `translateX(${calculateOffset("right")}px)`}}>{`${slide}/`.repeat(12)}</span>
            </div>
            <Block hero>
                <h1 className="page-title">{title}</h1>
                <p className="page-lead">{lead}</p>
                {children}
            </Block>
        </>
    );
};

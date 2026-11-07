import "./SlidingText.css";
import {useParallaxScroll} from "../hooks/useParallaxScroll";

export const SlidingText = ({className, direction, wrapperClassName = "", children}) => {
    const {calculateOffset} = useParallaxScroll();

    return (
        <div className={`resume-sliding-text${wrapperClassName ? ` ${wrapperClassName}` : ""}`}>
            <h1 className={className} style={{transform: `translateX(${calculateOffset(direction)}px)`}}>
                {children}
            </h1>
        </div>
    );
};

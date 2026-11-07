import "./GridPoints.css";
export const GridPoints = ({ count = 135, wrapperClassName = "", itemClassName = "" }) => (
    <div className={`grid-points${wrapperClassName ? ` ${wrapperClassName}` : ""}`}>
        {Array.from({ length: count }).map((_, i) => (
            <div className={`grid-point${itemClassName ? ` ${itemClassName}` : ""}`} key={i}></div>
        ))}
    </div>
);

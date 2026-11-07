import "./Block.css";

export const Block = ({id, hero = false, innerClassName = "", children}) => (
    <div className={`block${hero ? " block-hero" : ""}`} id={id}>
        <div className={`block-inner${innerClassName ? ` ${innerClassName}` : ""}`}>{children}</div>
    </div>
);

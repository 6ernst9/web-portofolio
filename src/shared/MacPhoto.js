import "./MacPhoto.css";

export const MacPhoto = ({src, alt}) => (
    <div className="mac-photo">
        <div className="mac-header">
            <div className="mac-button"/>
            <div className="mac-button yellow-button"/>
            <div className="mac-button green-button"/>
        </div>
        <img src={src} alt={alt} loading="lazy" decoding="async"/>
    </div>
);

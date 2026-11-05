export const GridItems = ({ count = 150 }) => (
    <div className="grid-container">
        {Array.from({ length: count }).map((_, i) => (
            <div className="grid-item" key={i}></div>
        ))}
    </div>
);
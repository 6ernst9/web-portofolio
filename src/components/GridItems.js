/**
 * Decorative background grid used behind several sections.
 * Replaces hand-typed walls of `<div className="grid-item"></div>`.
 *
 * Usage: <GridItems /> (defaults to the 60 cells every section used)
 *        <GridItems count={40} />
 */
export const GridItems = ({ count = 60 }) => (
    <div className="grid-container">
        {Array.from({ length: count }).map((_, i) => (
            <div className="grid-item" key={i}></div>
        ))}
    </div>
);
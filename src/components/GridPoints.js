/**
 * Decorative point-grid used behind several sections.
 * Replaces hand-typed walls of `<div className="grid-point ..."></div>`.
 *
 * The CSS (.grid-points) lays these out as a 15-column x 9-row grid
 * (grid-template-columns: repeat(15, 1fr); grid-template-rows: repeat(9, 1fr))
 * = 135 cells exactly. Any more than that overflows onto an implicit
 * 10th row as a stray dot on its own line.
 *
 * wrapperClassName: extra class on the outer `.grid-points` div
 *   (e.g. "contact-points", "socially-points")
 * itemClassName: extra class appended to each individual `.grid-point`
 *   (e.g. Contact.js adds "contact-point" to every point; most sections
 *   don't add anything per-item)
 *
 * Usage: <GridPoints wrapperClassName="contact-points" itemClassName="contact-point" />
 */
export const GridPoints = ({ count = 135, wrapperClassName = "", itemClassName = "" }) => (
    <div className={`grid-points${wrapperClassName ? ` ${wrapperClassName}` : ""}`}>
        {Array.from({ length: count }).map((_, i) => (
            <div className={`grid-point${itemClassName ? ` ${itemClassName}` : ""}`} key={i}></div>
        ))}
    </div>
);
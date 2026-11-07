import "./SkillList.css";
export const SkillList = ({items, pills = false}) => {
    if (pills) {
        return (
            <ul className="skill-pills">
                {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
        );
    }

    return (
        <p className="skill-list">
            {items.map((item, index) => (
                <span key={item}>
                    {item}
                    {index < items.length - 1 && <span className="skill-sep">{"\u00a0/ "}</span>}
                </span>
            ))}
        </p>
    );
};

import {Block} from "../../shared/Block";
import {SkillList} from "../../shared/SkillList";
import {building, techStack} from "../../data/about";
import "./TechStack.css";

export const TechStack = () => (
    <Block innerClassName="page-block">
        <h2>Tech stack</h2>
        {building.map((text) => <p key={text}>{text}</p>)}
        <div className="stack-groups">
            {techStack.map((group) => (
                <div className="stack-group" key={group.group}>
                    <h3>{group.group}</h3>
                    <SkillList items={group.items} pills />
                </div>
            ))}
        </div>
    </Block>
);

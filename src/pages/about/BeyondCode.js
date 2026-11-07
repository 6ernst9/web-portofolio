import {Block} from "../../shared/Block";
import {passions} from "../../data/about";

export const BeyondCode = () => (
    <Block innerClassName="page-block">
        <h2>Beyond the code</h2>
        {passions.map((text) => <p key={text}>{text}</p>)}
    </Block>
);

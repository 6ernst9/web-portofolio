import {Block} from "../../shared/Block";
import {profile} from "../../data/about";

export const WhatIDo = () => (
    <Block innerClassName="page-block">
        <h2>What I do</h2>
        {profile.map((text) => <p key={text}>{text}</p>)}
    </Block>
);

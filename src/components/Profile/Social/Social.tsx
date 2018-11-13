import {SocialInfo} from "./SocialInfo";
import * as React from "react";

const Social = (props: {social: SocialInfo}) => {
    return (
        <a href={props.social.link} title={props.social.name}>{props.social.icon()}</a>
    );
};

export default Social;
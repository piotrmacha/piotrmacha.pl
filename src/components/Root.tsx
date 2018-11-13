import * as React from "react";
import Profile from "./Profile/Profile";
import './Root.scss';
import TechnologyList from "./TechnologyList/TechnologyList";
import Separator from "./Separator/Separator";
import ProfileConfig from "../configs/ProfileConfig";

const Root = () => {
    return (
        <div className="Root">
            <Profile/>
            <Separator title={ProfileConfig.title}/>
            <TechnologyList/>
        </div>
    );
};

export default Root;
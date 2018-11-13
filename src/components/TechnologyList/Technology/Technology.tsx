import * as React from "react";
import {TechnologyInfo} from "./TechnologyInfo";
import './Technology.scss';

const Technology = (props: {technology: TechnologyInfo}) => {
    return (
        <div className="Technology">
            <div className="Technology-image">
                {props.technology.image()}
            </div>
            <div className="Technology-info">
                <h1>$> {props.technology.name}</h1>
                <h2>
                    {props.technology.libraries.map(library =>
                        <div>
                            <div>
                                {library.image()}
                                <span>{library.name}</span>
                            </div>
                        </div>
                    )}
                </h2>
            </div>
        </div>
    );
};

export default Technology;
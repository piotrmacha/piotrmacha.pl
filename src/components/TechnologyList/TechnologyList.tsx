import * as React from "react";
import TechnologyListConfig from '../../configs/TechnologyListConfig';
import Technology from "./Technology/Technology";

const TechnologyList = () => {
    return (
        <div>
            {TechnologyListConfig.map(technology => <Technology technology={technology} />)}
        </div>
    );
};

export default TechnologyList;
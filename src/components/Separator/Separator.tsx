import * as React from "react";
import './Separator.scss';

const Separator = (props: { title: string }) => {
    return (
        <div className="Separator">
            <span>{props.title}</span>
        </div>
    );
};

export default Separator;
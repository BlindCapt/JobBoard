import React from "react";

const Advertisement = (props) => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1">
                <div className="text-2xl">{props.titre}</div>
                <div className="mt-4">{props.description}</div>
                <a href="#" className="mt-4">
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default Advertisement;

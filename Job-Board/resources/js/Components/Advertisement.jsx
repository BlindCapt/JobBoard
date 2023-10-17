import React from "react";

const Advertisement = (props) => {
    return (
        <div className="container mx-auto bg-background rounded-lg p-4 mt-8">
            <div className="grid grid-cols-7">
                <div className="text-2xl col-span-6">{props.titre}</div>
                <div className="mt-4 col-span-6">{props.description}</div>
                <a href="#" className="bg-green-400 rounded-xl p-3 h-14 w-28">
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default Advertisement;

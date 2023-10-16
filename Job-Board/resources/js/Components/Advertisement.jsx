import React from "react";

const Advertisement = (props) => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1">
                <div className="text-2xl">{props.titre}</div>
                <div className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore provident culpa porro, consequuntur maiores ullam
                    ipsum voluptatem voluptate, pariatur expedita laudantium
                    quaerat impedit? Ullam deleniti optio quae iusto nobis
                    atque?
                </div>
                <a href="#" className="mt-4">
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default Advertisement;

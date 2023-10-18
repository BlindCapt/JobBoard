import { Link } from "@inertiajs/react";
import React from "react";

const Advertisement = (props) => {
    return (
        <div className="container mx-auto bg-background rounded-lg p-4 mt-8">
            <div className="grid grid-cols-7">
                <div className="text-2xl col-span-6">{props.titre}</div>
                <div className="mt-4 col-span-6">{props.description}</div>
                <div className="bg-green-400 rounded-xl h-14 w-28 pt-4 text-center">
                    <Link href={`http://127.0.0.1:8000/offer?id=${props.id}`}>
                        Learn more {props.id}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;

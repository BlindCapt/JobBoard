import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import UpdateOffer from "../Pages/Admin/Offers/UpdateOffer";

const CardOffer = ({ data }) => {
    const {
        datas,
        setDatas,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        id: data[0],
    });

    const handleDeleteButton = (e) => {
        e.preventDefault();

        destroy(route("delete.offer"));
    };

    let [formVisibility, SetFormVisibility] = useState(false);
    let [fullVisibility, SetFullVisibility] = useState(false);

    let hidden = "";
    if (fullVisibility) {
        hidden = "";
    } else {
        hidden = "hidden";
    }

    return (
        <div className="container relative grid grid-cols-4 mx-auto bg-background rounded-lg p-4 mt-8">
            {formVisibility ? (
                <div className=" col-span-3">
                    <UpdateOffer offer={data}></UpdateOffer>
                </div>
            ) : (
                <div className=" col-span-3 space-y-2 font-semibold">
                    <div className="flex">
                        ID : <div className="pl-4 font-normal">{data[0]}</div>
                    </div>
                    <div className="flex ">
                        Companie ID :
                        <div className="pl-4 font-normal">{data[1]}</div>
                    </div>
                    <div className="flex ">
                        Titre :
                        <div className="pl-2 font-normal text-gray-200">
                            {data[2]}
                        </div>
                    </div>
                    <div className="flex ">
                        Description:
                        <div className="pl-2 font-normal text-gray-200">
                            {data[3]}
                        </div>
                    </div>
                    <div className={`${hidden}`}>
                        Full description :{" "}
                        <div className="pt-2 font-normal text-gray-200">
                            {data[4]}
                        </div>
                    </div>
                </div>
            )}

            <div className="flex gap-5 absolute inset-y-0 right-0">
                <form onSubmit={handleDeleteButton}>
                    <button className=" bg-red-600 p-2 mt-5 rounded-md">
                        Delete
                    </button>
                </form>
                <div>
                    <button
                        className=" bg-green-600 p-2 mt-5 mr-3 rounded-md"
                        onClick={() => SetFormVisibility(!formVisibility)}
                    >
                        Update
                    </button>
                </div>
            </div>
            <div>
                <button
                    className=" bg-green-400 p-2 w-10 rounded-full"
                    onClick={() => SetFullVisibility(!fullVisibility)}
                >
                    {" "}
                    ↓
                </button>
            </div>
        </div>
    );
};

export default CardOffer;

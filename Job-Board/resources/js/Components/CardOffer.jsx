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
                <div className=" col-span-3">
                    <div className="">ID : {data[0]}</div>
                    <div className="">Companie ID : {data[1]}</div>
                    <div className="">Tite : {data[2]}</div>
                    <div className="">Description : {data[3]}</div>
                    <div className={`${hidden}`}>
                        Full description : {data[4]}
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

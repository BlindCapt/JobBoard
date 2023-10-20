import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import UpdateCompanie from "./UpdateCompanie";

const CardCompanie = ({ data }) => {
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

        destroy(route("delete.companie"));
    };

    let [formVisibility, SetFormVisibility] = useState(false);

    const form = <UpdateCompanie companie={data}></UpdateCompanie>;
    let hidden = "";
    if (formVisibility) {
        hidden = "";
    } else {
        hidden = "hidden";
    }

    return (
        <div className="container flex-col bg-slate-400 p-2 m-4">
            <div>
                <div className="">ID : {data[0]}</div>
                <div className="">Nom de l'entreprise : {data[1]}</div>
                <div className="">Description : {data[2]}</div>
            </div>
            <div className="flex gap-5">
                <form onSubmit={handleDeleteButton}>
                    <button className=" bg-red-600 p-2 rounded-md">
                        Delete
                    </button>
                </form>

                <button
                    className=" bg-green-600 p-2 rounded-md"
                    onClick={() => SetFormVisibility(!formVisibility)}
                >
                    Update
                </button>
            </div>
            <div className={`${hidden}`}>{form}</div>
        </div>
    );
};

export default CardCompanie;

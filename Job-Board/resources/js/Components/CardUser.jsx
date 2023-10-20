import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import UpdateUser from "../Pages/Admin/Users/UpdateUser";

const CardUser = ({ data }) => {
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

        destroy(route("delete.user"));
    };

    let [formVisibility, SetFormVisibility] = useState(false);

    const form = <UpdateUser user={data}></UpdateUser>;

    return (
        <div className="container relative grid grid-cols-2 mx-auto bg-background rounded-lg p-4 mt-8">
            {formVisibility ? (
                <div>{form}</div>
            ) : (
                <div>
                    <div className="">ID : {data[0]}</div>
                    <div className="">Nom : {data[1]}</div>
                    <div className="">Email : {data[2]}</div>
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
        </div>
    );
};

export default CardUser;

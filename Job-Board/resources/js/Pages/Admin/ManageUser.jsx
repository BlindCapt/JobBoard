import CardUser from "@/Components/CardUser";
import React, { useState } from "react";
import NewUser from "./Users/NewUser";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";

const ManageUser = ({ data, auth }) => {
    //Affichage des uses
    let ListCard = [];
    data.forEach((element) => {
        ListCard.push(<CardUser data={element} />);
    });

    ///////////
    //// Button new user pour affichage du form

    let [formVisibility, SetFormVisibility] = useState(false);

    let form;
    if (formVisibility) {
        form = <NewUser></NewUser>;
    } else {
        form = null;
    }

    return (
        <AuthenticatedLayout user={auth.user} header={"Manage Users"}>
            <div className="container mx-auto py-12 px-10 ">
                <div className="mb-5">
                    <div className="text-right mb-4">
                        <PrimaryButton
                            className=""
                            onClick={() => SetFormVisibility(!formVisibility)}
                        >
                            New User
                        </PrimaryButton>
                    </div>
                    <div className=" bg-asideGrey rounded-lg">{form}</div>
                </div>
                <div className="p-2 pb-12 bg-asideGrey rounded-lg">
                    {ListCard}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ManageUser;

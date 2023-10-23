import CardApply from "@/Components/CardApply";
import PrimaryButton from "@/Components/PrimaryButton";
import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import NewApply from "./Applies/NewApply";

const ManageApply = ({ data, auth }) => {
    //// Affichage des applies

    let ListCard = [];
    data.forEach((element) => {
        ListCard.push(<CardApply data={element} />);
    });

    return (
        <AuthenticatedLayout user={auth.user} header={"Manage Applies"}>
            <div className="container mx-auto py-12 px-10">
                <div className="p-2 pb-12 bg-asideGrey rounded-lg">
                    {ListCard}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ManageApply;

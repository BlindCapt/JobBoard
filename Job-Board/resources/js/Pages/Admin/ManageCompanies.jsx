import CardCompanie from "@/Components/CardCompanie";
import NewCompanie from "@/Components/NewCompanie";
import PrimaryButton from "@/Components/PrimaryButton";
import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const ManageCompanies = ({ data, auth }) => {
    //// Affichage des companies

    let ListCard = [];
    data.forEach((element) => {
        ListCard.push(<CardCompanie data={element} />);
    });

    ///////////
    //// Button new companie plus affiche du form

    let [formVisibility, SetFormVisibility] = useState(false);

    let form;
    if (formVisibility) {
        form = <NewCompanie></NewCompanie>;
    } else {
        form = null;
    }

    ///////////
    return (
        <AuthenticatedLayout user={auth.user} header={"Manage Companies"}>
            <div className="">
                <div className="text-right m-2">
                    <div>
                        <PrimaryButton
                            className=""
                            onClick={() => SetFormVisibility(!formVisibility)}
                        >
                            New Companie
                        </PrimaryButton>
                        <div className="">{form}</div>
                    </div>
                </div>
                <div>{ListCard}</div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ManageCompanies;

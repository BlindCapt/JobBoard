import CardOffer from "@/Components/CardOffer";
import PrimaryButton from "@/Components/PrimaryButton";
import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NewOffer from "./Offers/NewOffer";

const ManageOffers = ({ data, auth }) => {
    //// Affichage des companies

    let ListCard = [];
    data.forEach((element) => {
        ListCard.push(<CardOffer data={element} />);
    });

    ///////////
    //// Button new companie plus affiche du form

    let [formVisibility, SetFormVisibility] = useState(false);

    let form;
    if (formVisibility) {
        form = <NewOffer></NewOffer>;
    } else {
        form = null;
    }

    ///////////
    return (
        <AuthenticatedLayout user={auth.user} header={"Manage Offers"}>
            <div className="container mx-auto py-12 px-10">
                <div className="mb-5">
                    <div className="text-right mb-4">
                        <PrimaryButton
                            className=""
                            onClick={() => SetFormVisibility(!formVisibility)}
                        >
                            New Companie
                        </PrimaryButton>
                    </div>
                    <div className="bg-asideGrey rounded-lg">{form}</div>
                </div>
                <div className="p-2 pb-12 bg-asideGrey rounded-lg">
                    {ListCard}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ManageOffers;

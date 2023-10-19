import CardCompanie from "@/Components/CardCompanie";
import NewCompanie from "@/Components/NewCompanie";
import PrimaryButton from "@/Components/PrimaryButton";
import React, { useState } from "react";

const ManageCompanies = ({ data }) => {
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
    );
};

export default ManageCompanies;

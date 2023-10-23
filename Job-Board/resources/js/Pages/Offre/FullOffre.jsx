import React, { useState } from "react";
import CheckLayout from "../../Layouts/CheckLayout";
import PrimaryButton from "../../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/PrimaryButton";
import FormJobNotAuth from "@/Components/FormJobNotAuth";

const FullOffre = (props) => {
    let [formVisibility, SetFormVisibility] = useState(false);

    let form;
    if (formVisibility) {
        form = <FormJobNotAuth idOffre={props.id}></FormJobNotAuth>;
    } else {
        form = null;
    }

    return (
        <CheckLayout auth={props.auth} title={props.title}>
            <div className="py-12 px-10">
                <div className=" bg-asideGrey rounded-md mb-5 p-4">
                    <div>Companie ID : {props.company_id}</div>
                    <div>Description complete : {props.full_description} </div>
                </div>
                <PrimaryButton
                    className=" float-right"
                    onClick={() => SetFormVisibility(!formVisibility)}
                >
                    Postuler
                </PrimaryButton>
                {form}
            </div>
        </CheckLayout>
    );
};

export default FullOffre;

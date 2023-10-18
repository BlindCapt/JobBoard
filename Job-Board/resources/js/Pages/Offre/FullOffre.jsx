import React, { useState } from "react";
import CheckLayout from "../../Layouts/CheckLayout";
import PrimaryButton from "../../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/PrimaryButton";
import FormJob from "@/Components/FormJob";

const FullOffre = (props) => {
    let [formVisibility, SetFormVisibility] = useState(true);

    let form;
    if (formVisibility) {
        form = <FormJob></FormJob>;
    } else {
        form = null;
    }

    return (
        <CheckLayout auth={props.auth} title={props.title}>
            <div>
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
        </CheckLayout>
    );
};

export default FullOffre;

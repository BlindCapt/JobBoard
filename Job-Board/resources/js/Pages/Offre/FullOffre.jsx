import React from "react";
import GuestLayout from "../../Layouts/GuestLayout";

const FullOffre = (props) => {
    return (
        <div>
            <div>ID: {props.id}</div>
            <div>Companie ID : {props.company_id}</div>
            <div>Titre : {props.title} </div>
            <div>Description complete : {props.full_description} </div>
        </div>
    );
};

export default FullOffre;

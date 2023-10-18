import React from "react";
import CheckLayout from "../../Layouts/CheckLayout";

const FullOffre = (props) => {
    return (
        <CheckLayout auth={props.auth} title={props.title}>
            <div>
                <div>Companie ID : {props.company_id}</div>
                <div>Description complete : {props.full_description} </div>
            </div>
        </CheckLayout>
    );
};

export default FullOffre;

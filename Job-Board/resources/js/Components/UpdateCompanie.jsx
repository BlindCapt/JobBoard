import { useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";

const UpdateCompanie = ({ companie }) => {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            id: companie[0],
            name: companie[1],
            description: companie[2],
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route("update.companie"));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <InputLabel value={"Nom de l'entreprise"} />
                    <TextInput
                        id="name"
                        className=""
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        autoComplete="name"
                    />
                </div>
                <div>
                    <InputLabel value={"Description de l'entreprise"} />
                    <textarea
                        id="description"
                        className=""
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        required
                        autoComplete="description"
                    />
                </div>
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </div>
    );
};

export default UpdateCompanie;

import { useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import PrimaryButton from "./PrimaryButton";

const NewCompanie = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("create.companie"));
    };
    return (
        <div>
            <h2> Enregistre une nouvelle entreprise </h2> <br />
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

export default NewCompanie;

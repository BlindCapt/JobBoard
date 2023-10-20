import { useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "../../../Components/InputLabel";
import PrimaryButton from "../../../Components/PrimaryButton";
import TextInput from "../../../Components/TextInput";

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
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <InputLabel
                        value={"Nom de l'entreprise"}
                        className="text-white"
                    />
                    <TextInput
                        id="name"
                        className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        autoComplete="name"
                    />
                </div>
                <div>
                    <InputLabel
                        value={"Description de l'entreprise"}
                        className="text-white"
                    />
                    <textarea
                        id="description"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
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

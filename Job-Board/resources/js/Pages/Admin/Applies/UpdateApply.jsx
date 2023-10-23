import { useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "../../../Components/InputLabel";
import PrimaryButton from "../../../Components/PrimaryButton";
import TextInput from "../../../Components/TextInput";

const UpdateApply = ({ apply }) => {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            id_offre: apply[1],
            name: apply[2],
            adress: apply[3],
            message: apply[4],
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route("update.apply"));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <InputLabel
                        value={"Id de l'offre"}
                        className="text-white"
                    />
                    <TextInput
                        id="id_offre"
                        className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                        value={data.id_offre}
                        onChange={(e) => setData("id_offre", e.target.value)}
                        required
                        autoComplete="id_offre"
                    />
                </div>
                <div>
                    <InputLabel
                        value={"Nom du postulant"}
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
                    <InputLabel value={"Adresse"} className="text-white" />
                    <TextInput
                        id="adress"
                        className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                        value={data.adress}
                        onChange={(e) => setData("adress", e.target.value)}
                        required
                        autoComplete="adress"
                    />
                </div>
                <div>
                    <InputLabel value={"Message"} className="text-white" />
                    <textarea
                        id="message"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                        value={data.message}
                        onChange={(e) => setData("message", e.target.value)}
                        required
                        autoComplete="message"
                    />
                </div>
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </div>
    );
};

export default UpdateApply;

import { useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "../../../Components/InputLabel";
import PrimaryButton from "../../../Components/PrimaryButton";
import TextInput from "../../../Components/TextInput";

const UpdateOffer = ({ offer }) => {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            id: offer[0],
            company_id: offer[1],
            title: offer[2],
            description: offer[3],
            full_description: offer[4],
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route("update.offer"));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <InputLabel
                        value={"Titre de l'offer"}
                        className="text-white"
                    />
                    <TextInput
                        id="title"
                        className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        required
                        autoComplete="title"
                    />
                </div>
                <div>
                    <InputLabel
                        value={"ID de l'entreprise qui poste l'offre"}
                        className="text-white"
                    />
                    <TextInput
                        id="company_id"
                        className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                        value={data.company_id}
                        onChange={(e) => setData("company_id", e.target.value)}
                        required
                        autoComplete="company_id"
                    />
                </div>
                <div>
                    <InputLabel
                        value={"Description de l'offre"}
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
                <div>
                    <InputLabel
                        value={"Description complete de l'offre"}
                        className="text-white"
                    />
                    <textarea
                        id="full_description"
                        className="block w-full h-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                        value={data.full_description}
                        onChange={(e) =>
                            setData("full_description", e.target.value)
                        }
                        required
                        autoComplete="full_description"
                    />
                </div>
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </div>
    );
};

export default UpdateOffer;

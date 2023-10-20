import { useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "../../../Components/InputLabel";
import TextInput from "../../../Components/TextInput";
import PrimaryButton from "../../../Components/PrimaryButton";

const NewOffer = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        company_id: "",
        title: "",
        description: "",
        full_description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("create.offer"));
    };
    return (
        <div className="p-3">
            <h2 className="text-base font-semibold leading-7 pt-2 pb-8">
                Enregistre une nouvelle offre
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-y-5 pb-8">
                    <div className="sm:col-span-4">
                        <InputLabel
                            value={"Id de la companie postant l'offre"}
                            className="block text-sm font-medium leading-6"
                        />
                        <TextInput
                            id="company_id"
                            className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                            value={data.company_id}
                            onChange={(e) =>
                                setData("company_id", e.target.value)
                            }
                            required
                            autoComplete="company_id"
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <InputLabel
                            value={"Titre de l'offre"}
                            className="block text-sm font-medium leading-6"
                        />
                        <TextInput
                            id="title"
                            className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            required
                            autoComplete="title"
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <InputLabel
                            value={"Description de l'offre"}
                            className="block text-sm font-medium leading-6"
                        />
                        <textarea
                            id="description"
                            className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            required
                            autoComplete="description"
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <InputLabel
                            value={"Description complete de l'offre"}
                            className="block text-sm font-medium leading-6"
                        />
                        <textarea
                            id="full_description"
                            className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                            value={data.full_description}
                            onChange={(e) =>
                                setData("full_description", e.target.value)
                            }
                            required
                            autoComplete="full_description"
                        />
                    </div>
                </div>
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </div>
    );
};

export default NewOffer;

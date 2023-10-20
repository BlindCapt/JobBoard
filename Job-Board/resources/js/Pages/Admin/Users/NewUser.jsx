import { useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "../../../Components/InputLabel";
import TextInput from "../../../Components/TextInput";
import PrimaryButton from "../../../Components/PrimaryButton";

const NewUser = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("create.user"));
    };
    return (
        <div className="p-3">
            <h2 className="text-base font-semibold leading-7 pt-2 pb-8">
                Enregistre un nouvel utilisateur
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-y-5 pb-8">
                    <div className="sm:col-span-4">
                        <InputLabel
                            value={"Nom de l'utilisateur"}
                            className="block text-sm font-medium leading-6"
                        />
                        <TextInput
                            id="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            autoComplete="name"
                            className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <InputLabel
                            value={"Email"}
                            className="block text-sm font-medium leading-6"
                        />
                        <TextInput
                            id="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            autoComplete="email"
                            className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <InputLabel
                            value={"Password"}
                            className="block text-sm font-medium leading-6"
                        />
                        <TextInput
                            id="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                            autoComplete="password"
                            className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </div>
    );
};

export default NewUser;

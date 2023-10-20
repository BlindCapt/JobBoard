import { useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "../../../Components/InputLabel";
import PrimaryButton from "../../../Components/PrimaryButton";
import TextInput from "../../../Components/TextInput";

const UpdateUser = ({ user }) => {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            id: user[0],
            name: user[1],
            email: user[2],
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route("update.user"));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <InputLabel value={"Nom du user"} className="text-white" />
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
                        value={"Email du user"}
                        className="text-white"
                    />
                    <TextInput
                        id="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="email"
                    />
                </div>
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </div>
    );
};

export default UpdateUser;

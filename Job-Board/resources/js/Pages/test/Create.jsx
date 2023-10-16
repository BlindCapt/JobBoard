import Advertisement from "@/Components/Advertisement";
import Dropdown from "@/Components/Dropdown";
import TestGradient from "@/Components/testGradient";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

const index = [5, 10, 15];

const Create = () => {
    const [NbAd, SetNbAd] = useState(5);

    let Arr = [];
    for (let i = 0; i < NbAd; i++) {
        Arr.push(<Advertisement titre={i} />);
    }

    return (
        <React.Fragment>
            <div className="container mx-auto px-20">
                {/*<div className="hidden sm:flex sm:items-center sm:ml-6">
                <div className="ml-3 relative">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    Settings
                                    <svg
                                        className="ml-2 -mr-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <button
                                className="w-full"
                                value={5}
                                onChange={(e) =>
                                    SetNbAd("NbAd", e.target.value)
                                }
                            >
                                5
                            </button>
                            <Dropdown.Link>10</Dropdown.Link>
                            <Dropdown.Link>15</Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </div>*/}
                <select onChange={(e) => SetNbAd(e.target.value)}>
                    {index.map((index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}
                </select>

                <div className="grid grid-cols-3 gap-12 ">{Arr}</div>
                <TestGradient />
            </div>
        </React.Fragment>
    );
};

export default Create;

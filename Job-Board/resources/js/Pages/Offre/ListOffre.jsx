import Advertisement from "@/Components/Advertisement";
import CheckLayout from "../../Layouts/CheckLayout";
import { useState } from "react";

const index = [5, 10, 15];
export default function ListOffre({ auth, data }) {
    const [NbAd, SetNbAd] = useState(5);

    let Arr = [];
    for (let i = 0; i < NbAd; i++) {
        Arr.push(
            <Advertisement
                titre={data[i][0]}
                description={data[i][1]}
                id={data[i][2]}
            />
        );
    }

    return (
        <CheckLayout auth={auth} title={"offres d'emploi"}>
            <div className="container py-12 px-10">
                <div className="flex gap-5 mb-5 p-4 rounded-md bg-asideGrey ">
                    <div className="w-2/3 bg-white rounded-lg p-2  text-black">
                        SERACH BAR
                    </div>
                    <select
                        className="rounded-xl bg-background"
                        onChange={(e) => SetNbAd(e.target.value)}
                    >
                        {index.map((index) => (
                            <option
                                key={index}
                                value={index}
                                className="bg-white text-black"
                            >
                                {index}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="p-4 bg-asideGrey rounded-md">{Arr}</div>
            </div>
        </CheckLayout>
    );
}

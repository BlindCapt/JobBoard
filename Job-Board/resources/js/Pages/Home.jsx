import Advertisement from "@/Components/Advertisement";
import { useState } from "react";

const index = [5, 10, 15];
export default function Home({ name }) {
    const [NbAd, SetNbAd] = useState(5);

    let Arr = [];
    for (let i = 0; i < NbAd; i++) {
        Arr.push(<Advertisement titre={i} />);
    }

    return (
        <div className="container mx-auto px-20">
            Variable en argument = {name}
            <select onChange={(e) => SetNbAd(e.target.value)}>
                {index.map((index) => (
                    <option key={index} value={index}>
                        {index}
                    </option>
                ))}
            </select>
            <div className="grid grid-cols-3 gap-12 ">{Arr}</div>
        </div>
    );
}

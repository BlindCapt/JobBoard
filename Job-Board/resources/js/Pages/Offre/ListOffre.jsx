import Advertisement from "@/Components/Advertisement";
import CheckLayout from "../../Layouts/CheckLayout";
import { useState } from "react";
import SearchBar from "@/Components/SearchBar";

export default function ListOffre({ auth, data }) {
    const [NbAd, SetNbAd] = useState(5);
    const [search, setSearch] = useState('');
    const index = [5, 10, 15]; 
    const filteredData = data.filter((item) =>
        item[0].toLowerCase().includes(search.toLowerCase())
    );
    const Arr = filteredData.slice(0, NbAd).map((item, index) => (
        <Advertisement
            titre={item[0]}
            description={item[1]}
            id={item[2]}
            key={index}
        />
    ));

    return (
        <CheckLayout auth={auth} title={"offres d'emploi"}>
            <div className="container mx-auto">
                <div className="flex gap-5 mb-5">
                    <SearchBar search={search} setSearch={setSearch} /> 
                    <select
                        className="rounded-xl bg-background my-2"
                        onChange={(e) => SetNbAd(e.target.value)}
                    >
                        {index.map((value) => (
                            <option
                                key={value}
                                value={value}
                                className="bg-white text-black"
                            >
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
                <div>{Arr}</div>
            </div>
        </CheckLayout>
    );
}


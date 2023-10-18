import React from "react";
import CheckLayout from "../../Layouts/CheckLayout";
const index = [5, 10, 15];

const Offres = () => {
    const [NbAd, SetNbAd] = useState(5);

    let Arr = [];
    for (let i = 0; i < NbAd; i++) {
        Arr.push(<Advertisement titre={data[i][0]} description={data[i][1]} />);
    }
    return (
        <CheckLayout>
            <div>search bar</div>
            <select onChange={(e) => SetNbAd(e.target.value)}>
                {index.map((index) => (
                    <option key={index} value={index}>
                        {index}
                    </option>
                ))}
            </select>
            <div className="grid grid-cols-3 gap-12 ">{Arr}</div>
        </CheckLayout>
    );
};

export default Offres;

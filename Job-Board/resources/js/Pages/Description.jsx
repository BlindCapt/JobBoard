import { Head, Link, useForm } from '@inertiajs/react';


export default function Description(){
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        text: '',
        remember: false,
    });


    const OfferSubmit = (e) => {
        e.preventDefault();

        let a = post(route('setOffer'), "salut");
        console.log(a);
    };
    
    
    return <div> 


        <h2> Enregistrer une nouvelle offre : </h2> <br/>
        <form onSubmit={OfferSubmit}> 
        Nom de l'offre : <br/>
        <input 
        type="text" 
        name="name"
        value={data.name}
        onChange={(e) => setData("name", e.target.value)}
        ></input>

        <br/><br/>
        ID de l'entreprise :  <br/>
        <input 
        type="text" 
        name="company_id"
        value={data.company_id}
        onChange={(e) => setData("company_id", e.target.value)}
        ></input>

        <br/><br/>
        Description de l'offre :
        <br/>
        <textarea
        name="text"
        value={data.text}
        onChange={(e) => setData("text", e.target.value)}
        ></textarea>

        <br/><br/>
        <button> envoyer </button>    
        </form> 


    </div>
}
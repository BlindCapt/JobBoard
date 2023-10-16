import { Head, Link, useForm } from '@inertiajs/react';


export default function Description(){
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        remember: false,
    });

    const CompanySubmit = (e) => {
        e.preventDefault();

        let a = post(route('setCompany'), "salut");
        console.log(a);
    };
    
    
    return <div> 
        
        <h2> Enregistre une nouvelle entreprise </h2> <br/>
        <form onSubmit={CompanySubmit}> 
        Nom de l'entreprise <br/>

        <input 
        type="text" 
        name="name"
        value={data.name}
        onChange={(e) => setData("name", e.target.value)}
        ></input>


        <br/><br/>
        Description de l'entreprise
        <br/>

        <textarea
        name="description"
        value={data.description}
        onChange={(e) => setData("description", e.target.value)}
        ></textarea>

        <br/><br/>
        <button> envoyer </button>    
        </form> 

    </div>
}
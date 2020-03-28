import React,{useState} from 'react';
import { FiArrowLeft} from 'react-icons/fi'
import { Link,useHistory } from 'react-router-dom';

import './style.css';
import logoImg from '../../assets/logo.svg';
import api from "../services/api";
export default function NewIncident(){
    
    const history=useHistory();
    const ongId=localStorage.getItem("ongId")
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [value,setValue] = useState("");
async function handleNewIncident(e){
    e.preventDefault();
    const data = {
        title,
        description,
        value
    };
try{
    api.post("incidents",data,{
    headers:{
    authorization:ongId
}
});
    history.push("/profile");
    
}catch(err){
    alert("Erroo ao cadastrar,Tente Novamente");
}

   }

   return (<div className="new-incident-conteiner">
    <div className="content">
        <section>
        <img src={logoImg} alt="Be The Hero"/>
        <h1>Cadastrar novo caso</h1>
        <p>
            Descreva o Caso Detalhadamente para encontrar um heroi pra resolver isso.
        </p>
        <Link to="/profile" className="back-link">
                  <FiArrowLeft size={16} color="#e02041"/>
                  Voltar par home.
              </Link>
        </section>
        <form onSubmit={handleNewIncident}>
            <input 
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="titulo do caso"
            />
            <textarea 
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição"
            />
            <input type="text" 
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="valor em reais"
            />
            
                <button type="submit" className="button">
                    Cadastrar
                </button>
        </form>
    </div>
</div>
    
    
    
    
    );}
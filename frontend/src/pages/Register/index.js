import React,{useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import { Link,useHistory } from 'react-router-dom';
import api from '../services/api';


import './style.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){
    const history=useHistory();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [whatsapp,setWhatsapp] = useState("");
    const [city,setCity] = useState("");
    const [uf,setUf] = useState("");
    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        try{
            const response = await api.post('ongs',data);
            
        alert(` Seu ID de Acesso: ${response.data.id}`);
        history.push('/');
        } catch(err){
            //const response = await api.post('ongs',data);
        alert(` Erro no cadastro: tente novamente`);
        }
    }
    return (<div className="register-conteiner">
        <div className="content">
            <section>
            <img src={logoImg} alt="Be The Hero"/>
            <h1>Cadastro</h1>
            <p>
                Faça seu cadatro,entre na plataforma
                e ajude pessoas a encontrarem os casos 
                da sua ONG.
            </p>
            <Link to="/" className="back-link">
                      <FiArrowLeft size={16} color="#e02041"/>
                      Login
                  </Link>
            </section>
            <form onSubmit={handleRegister}>
                <input 
                placeholder="Nome da ONG"
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <input 
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email" placeholder="E-mail"/>
                <input
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}
                type="text" placeholder="Whatsapp"/>
                <div className="input-group">
                    <input 
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    type="text" 
                    placeholder="cidade"/>
                    <input
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                    type="text"
                     placeholder="UF" 
                     style={{width:80}}/>
            
                </div >
                    <button type="submit" className="button">
                        Cadastrar
                    </button>
            </form>
        </div>
    </div>
        
        
        
        
        );}
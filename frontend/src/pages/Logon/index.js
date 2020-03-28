import React,{useState} from 'react';
import {FiLogIn} from 'react-icons/fi'
import './style.css';
import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { Link,useHistory } from 'react-router-dom';
import api from '../services/api';
export default function Logon(){
    const [id,setId]= useState('');
    const history = useHistory();
    async function handleLogin(e){
e.preventDefault();
try{
    const response = await api.post('sessions',{id});
    //console.log(response.data.name);
    localStorage.setItem('ongId',id);
    localStorage.setItem('ongName',response.data.name);
    history.push('profile');

}catch(err )
{
    alert('na localizamos seu ID');
    //history
}

    }
    return (
       <div className="Logon-conteiner">
          <section className="form">
              <img src={logoImg} alt="Be The Hero"/>
              <form onSubmit={handleLogin}>
                  <h1>Faça seu Logon.</h1>
                  <input
                   placeholder="Sua ID"
                   value={id}
                   onChange={e => setId(e.target.value)}
                  />
                  <button className="button" type="submit">Entrar</button>
                  <Link to="/register" className="back-link">
                      <FiLogIn size={16} color="#e02041"/>
                      Não Tenho Cadastro.
                  </Link>
              </form>
              </section> 
              <img src={herosImg} alt="Heroes"/>
       </div>

    );
}
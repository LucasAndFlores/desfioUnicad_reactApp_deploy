import React, { useEffect, useState } from 'react';
import axios from 'axios'
import EntregasCard from './components/entregas/cardEntregas/card';
import FormEntrega from './components/entregas/Form/form';
import NavBar from './components/nav/nav';
import './App.css';

function Home () {

  const [ entregas, setEntregas ] = useState()
  const [ loading, setLoading ] = useState(true)


  function refreshPage() {
    window.location.reload(true)
  }


  
  useEffect ( () => {
    const axiosFunctions = async () => {
        const entregaDados  = await axios.get('http://localhost:8000/v1/entregas/')
        setEntregas(entregaDados.data)
        setLoading(false)
    }
    axiosFunctions()
  }, [])


  

  return (
    <span onSubmit={refreshPage}>
        <NavBar />
        <FormEntrega />
        {loading ? "carregando ..." : < EntregasCard entregas={entregas} />}

    </span>
  );
}

export default Home;

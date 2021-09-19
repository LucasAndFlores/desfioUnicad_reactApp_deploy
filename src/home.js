import React, { useEffect, useState } from 'react';
import axios from 'axios'
import EntregasCard from './components/entregas/cardEntregas/card';
import FormEntrega from './components/entregas/Form/form';
import './App.css';

function Home () {

  const [ entregas, setEntregas ] = useState()
  const [ loading, setLoading ] = useState(true)


  
  useEffect ( () => {
    const axiosFunctions = async () => {
        const entregaDados  = await axios.get('http://localhost:8000/v1/entregas/')
        setEntregas(entregaDados.data)
        setLoading(false)
    }
    axiosFunctions()
  }, [])


  console.log(entregas)
  

  return (
    <span>
        <FormEntrega />
        {loading ? "carregando ..." : < EntregasCard entrega={entregas} />}
        {/* {entregas[0].nome_cliente} */}

    </span>
  );
}

export default Home;

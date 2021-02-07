import Head from 'next/head'
import {useRouter} from 'next/router'
import {useState, useEffect} from "react";
import styled from  'styled-components';


export default function Home() {
  const router = useRouter();
  const [nome, setNome] = useState("Bruno");

  function paginaAlien()
  {
    router.push("/alien")
  } 

  function pegarNome(nome)
  {
    setNome(nome);
  }

  /*useEffect(
    async () => {
      await fetch('https://localhost:5001/api/alien', {method: 'GET'}).then(e => console.log(e));
    },[nome]
  );*/
 
  return (
      <div>
        <center>
        <h1>{nome}</h1>
        <input onChange={e => pegarNome(e.target.value)}/>
        <button onClick={() => paginaAlien()}>Alien</button>
        </center>
      </div>

  )
}

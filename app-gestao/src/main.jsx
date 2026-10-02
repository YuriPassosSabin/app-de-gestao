import { StrictMode, useEffect } from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

 function Teste(){
 const [pe, setPe] = useState("");

 useEffect(() => {
  
  const chamarRequisicao = async () => {
  
 const resposta = await fetch("http://localhost:8080/tabela");
 const respostaJson = await resposta.json();
 

 setPe(respostaJson);
 }
chamarRequisicao() },[]);




 return <div>
  <tr>{pe?.id}</tr>
  <tr>{pe?.title}</tr>
    <tr>{pe?.funcionarios?.map(funcionarios => (<div key={funcionarios.id}>
      <tr>{funcionarios.id}</tr>
      <tr>{funcionarios.funct}</tr>
      <tr>{funcionarios.target}</tr>
      <tr>{funcionarios.term}</tr>
      <tr>{funcionarios.email}</tr>
      <tr>{funcionarios.phone}</tr>
      </div>
    ))}</tr>
 </div>;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

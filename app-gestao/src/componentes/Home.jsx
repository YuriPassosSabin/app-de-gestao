import React from "react";
import { useNavigate } from "react-router-dom";

class HomeC extends React.Component{
    constructor(props){
    super(props);

    this.state = {
        tabelas:[],
        nomeTabela:""}
}

criaTabela = () => {
 const newTabela ={
    id : Date.now(),
    title : this.state.nomeTabela
 }

 this.setState({
    tabelas: [...this.state.tabelas, newTabela],
    nomeTabela: ""
   }
 );
}

componentDidMount(){

      
      const chamarRequisicao = async () => {
      
     const resposta = await fetch("http://localhost:8080/tabela");
     const respostaJson = await resposta.json();
    
    
     this.setState({
        tabelas: respostaJson
        });
     }
    chamarRequisicao();

}


  render(){
    return (
        <div>

            <h1>Minhas tabelas</h1>

            {this.state.tabelas.map((tabela) => (

                <div
                    key={tabela?.id}
                    onClick={() => this.props.navegate(`/tabela/${tabela.id}`)}
                >
                    <h2>{tabela.title}</h2>
                </div>

            ))}
            <input
               type="text"
               value={this.state.nomeTabela}
               onChange={(event) =>
               this.setState({ nomeTabela: event.target.value })
                }
            />

            <button onClick={this.criaTabela}>
               Criar tabela
            </button>

             

        </div>
    );}
}

function Home(){
    const navegate = useNavigate();

    


    return (
        <HomeC navegate={navegate}/>
    )
}

export default Home;
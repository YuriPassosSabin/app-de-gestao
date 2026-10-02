import React from "react";
import Funcionario from "./Funcionario";
import { useNavigate, useParams } from "react-router-dom";



class TabelaC extends React.Component{

    
    constructor(props){
        super(props);
        this.state ={
            funcionarios: [],
            title: ""
        };

        

    

        this.addFuncionario = this.addFuncionario.bind(this);
      

    }

    addFuncionario = () =>{

       var newFuncionario = {
             id : Date.now(),
             name : "", 
             funct : "",
             target : "",
             term : "",
             email : "",
             phone : ""
            }

             this.setState({
             funcionarios: [...this.state.funcionarios, newFuncionario]
            });

    }

    editarFuncionario = (id, campo, valor) => {
    this.setState({
        funcionarios: this.state.funcionarios.map(funcionario =>
            funcionario.id === id
                ? { ...funcionario, [campo]: valor }
                : funcionario
        )
    });
};

    removeFuncionario = (id) => {
    this.setState({
        funcionarios: this.state.funcionarios.filter(funcionario => 
            funcionario.id !== id
        )
    })};

    componentDidMount(){

      
      const chamarRequisicao = async () => {
      
     const resposta = await fetch(`http://localhost:8080/funcionario/${this.props.id}`);
     const respostaJson = await resposta.json();
     
     
    
     this.setState({
        funcionarios: respostaJson?.funcionarios,
        title: respostaJson?.title
    });
     }
    chamarRequisicao();

}



    render(){
        return(
        
        <div>

            <h1>{this.state?.title}</h1>

        <table>
               <tbody id={"lista de funsionarios" + this.props.id}>
                <tr>
                    <td>Nome do funcionario</td>
                    <td>Função</td>
                    <td>Tarefa</td>
                    <td>Prazo</td>
                    <td>email</td>
                    <td>Telefone</td>
                </tr>


                {this.state.funcionarios?.map(funcionario => (
                    <Funcionario 
                    key={funcionario.id}
                    funcionario={funcionario}
                    editarFuncionario={this.editarFuncionario}
                    excluir={this.removeFuncionario}/>
                ))}
                
                <tr>
                    <button onClick={this.addFuncionario}>adicionar funcionario</button>
                </tr>

                <tr><button onClick={() => this.props.navigate(`/`)}>voltar</button></tr>
                
                </tbody>
        </table>
        </div>
        )
    }
}

function Tabela(props){
    const { id }= useParams();
    const navigate = useNavigate();
    

    


    return(
        <TabelaC id={id} navigate={navigate}/>
    )
}

export default Tabela;
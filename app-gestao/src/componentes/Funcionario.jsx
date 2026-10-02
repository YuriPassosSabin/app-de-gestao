import { useState } from "react";

var Funcionario = (props) => {
    
            const [editando, setEditando] = useState(false);

         const editar = () => (
            setEditando(
               true
            )
         )

         const fechar = () => (
            setEditando(
               false
            )
         )
         

     
            return(<tr>{editando ? (<>
            <td><input type="text" 
            value={props.funcionario.name} 
            onChange={(event) => 
            props.editarFuncionario(
               props.funcionario.id,
                "name",
                 event.target.value)}/></td>
            
            
            <td><input type="text" 
            value={props.funcionario.funct} 
            onChange={(event) => 
            props.editarFuncionario(
               props.funcionario.id,
                "funct",
                 event.target.value)}/></td>
            
            
            <td><input type="text" 
            value={props.funcionario.target} 
            onChange={(event) => 
            props.editarFuncionario(
               props.funcionario.id,
                "target",
                 event.target.value)}/></td>
            
            
            <td><input type="text" 
            value={props.funcionario.term} 
            onChange={(event) => 
            props.editarFuncionario(
               props.funcionario.id,
                "term",
                 event.target.value)}/></td>
            
            
            <td><input type="email" 
            value={props.funcionario.email} 
            onChange={(event) => 
            props.editarFuncionario(
               props.funcionario.id,
                "email",
                 event.target.value)}/></td>
            
            
            <td><input type="text" 
            value={props.funcionario.phone} 
            onChange={(event) => 
            props.editarFuncionario(
               props.funcionario.id,
                "phone",
                 event.target.value)}/></td>
            
            
            <td><button onClick={fechar}>fechar</button></td>
            </>) : (
                  <>
            <td>{props.funcionario.name}</td>
            <td>{props.funcionario.funct}</td>
            <td>{props.funcionario.target}</td>
            <td>{props.funcionario.term}</td>
            <td>{props.funcionario.email}</td>
            <td>{props.funcionario.phone}</td>
            <td><button onClick={editar}>editar</button></td>
            <td><button onClick={() => props.excluir(props.funcionario.id)}>excluir</button></td>
            </>   
               )}
               </tr>
                
            )
        }


export default Funcionario;
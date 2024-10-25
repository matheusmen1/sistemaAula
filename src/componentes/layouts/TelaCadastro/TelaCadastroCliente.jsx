import { Alert } from "react-bootstrap";
import FormCadCliente from "./Formularios/FormCadCliente";
import Pagina from "../Pagina";
import { useState } from "react";
import TabelaClientes from "./Tabelas/TabelaClientes";
import { clientes } from "../../../dados/mockClientes";

export default function TelaCadastroCliente(props){
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeClientes, setListaClientes] = useState(clientes);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState({
        codigo:0,
        cpf:"",
        nome:"",
        nascimento:"",
        cidade:"",
        cep:"",
    });

   
    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Cliente
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaClientes listaDeClientes={listaDeClientes}
                                        setListaDeClientes={setListaClientes} 
                                        setExibirTabela={setExibirTabela}
                                        setModoEdicao={setModoEdicao}
                                        setClienteSelecionado={setClienteSelecionado} /> :
                        <FormCadCliente listaDeClientes={listaDeClientes}
                                         setListaDeClientes={setListaClientes}
                                         setExibirTabela={setExibirTabela}
                                         clienteSelecionado={clienteSelecionado}
                                         setClienteSelecionado={setClienteSelecionado}
                                         modoEdicao={modoEdicao}
                                         setModoEdicao={setModoEdicao}

                                         />
                }
            </Pagina>
        </div>
    );
}
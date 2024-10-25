import { Alert } from "react-bootstrap";
import FormCadFornecedor from "./Formularios/FormCadFornecedor";
import Pagina from "../Pagina";
import { useState } from "react";
import TabelaFornecedores from "./Tabelas/TabelaFornecedores";
import { fornecedores } from "../../../dados/mockFornecedores";

export default function TelaCadastroFornecedor(props){
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaFornecedores, setListaFornecedores] = useState(fornecedores);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState({
        codigo:0,
        cpf:"",
        nome:"",
        cidade:"",
        cep:"",
    });

    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Fornecedor
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaFornecedores listaFornecedores={listaFornecedores}
                                        setListaFornecedores={setListaFornecedores} 
                                        setExibirTabela={setExibirTabela}
                                        setModoEdicao={setModoEdicao}
                                        setFornecedorSelecionado={setFornecedorSelecionado} /> :
                        <FormCadFornecedor listaFornecedores={listaFornecedores}
                                         setListaFornecedores={setListaFornecedores}
                                         setExibirTabela={setExibirTabela}
                                         fornecedorSelecionado={fornecedorSelecionado}
                                         setFornecedorSelecionado={setFornecedorSelecionado}
                                         modoEdicao={modoEdicao}
                                         setModoEdicao={setModoEdicao}

                                         />
                }
            </Pagina>
        </div>
    );
}
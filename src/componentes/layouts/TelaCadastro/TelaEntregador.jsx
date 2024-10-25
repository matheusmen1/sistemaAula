import { Container, Alert } from "react-bootstrap";
import Pagina from "../Pagina";
import FormEntregador from "./Formularios/Entregador";
import { useState } from "react"
import TabelaEntregador from "./Tabelas/TabelaEntregador";
import { Entregador } from "../../../dados/mockEntregador";
export default function TelaEntregador(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeEntregador, setListaDeEntregador] = useState(Entregador);
    const [entregadorSelecionado, setEntregadorSelecionado] = useState({
        codigo: 0,
        nome: "",
        cpf: "",
        dtNascimento: "",
        endereco: "",
        telefone: 0
        });
    const [modoEdicao, setModoEdicao] = useState(false);
    return (
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" varaint ="success">
                    <h2>
                       Cadastro de Entregador
                    </h2>
                </Alert>
                {exibirTabela ? <TabelaEntregador listaDeEntregador={listaDeEntregador} setListaDeEntregador={setListaDeEntregador} setExibirTabela={setExibirTabela} setEntregadorSelecionado={setEntregadorSelecionado} setModoEdicao={setModoEdicao} modoEdicao={modoEdicao}/> :
                        <FormEntregador listaDeEntregador={listaDeEntregador} setListaDeEntregador={setListaDeEntregador} setExibirTabela={setExibirTabela} setEntregadorSelecionado={setEntregadorSelecionado} entregadorSelecionado={entregadorSelecionado} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}/>} 

            </Pagina>
        </Container>
    );
}
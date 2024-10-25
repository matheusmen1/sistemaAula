import { Container, Alert } from "react-bootstrap";
import Pagina from "../Pagina";
import FormCategoria from "./Formularios/Categoria";
import { useState } from "react"
import TabelaCategoria from "./Tabelas/TabelaCategorias";
import { categoria } from "../../../dados/mockCategoria";
export default function TelaCategoria(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeCategorias, setListaDeCategorias] = useState(categoria);
    const [categoriaSelecionado, setCategoriaSelecionado] = useState({
        codigo: 0,
        nome: "",
        departamento: "",
        dataCriacao: "",
        responsavel: ""});
    const [modoEdicao, setModoEdicao] = useState(false);
    // os componentes passam a conhecer as "informações"
    return (
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" varaint ="success">
                    <h2>
                       Cadastro de Categoria 
                    </h2>
                </Alert>
                {exibirTabela ? <TabelaCategoria listaDeCategorias={listaDeCategorias} setListaDeCategorias={setListaDeCategorias} setExibirTabela={setExibirTabela} setCategoriaSelecionado={setCategoriaSelecionado} setModoEdicao={setModoEdicao}/> :
                        <FormCategoria listaDeCategorias={listaDeCategorias} setListaDeCategorias={setListaDeCategorias} setExibirTabela={setExibirTabela} setCategoriaSelecionado={setCategoriaSelecionado} categoriaSelecionado={categoriaSelecionado} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}/>} 

            </Pagina>
        </Container>
    );
}
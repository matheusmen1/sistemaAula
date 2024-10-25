import { Container, Alert } from "react-bootstrap";
import Pagina from "../Pagina";
import FormProduto from "./Formularios/Produto";
import { useState } from "react"
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import { produtos } from "../../../dados/mockProdutos";
export default function TelaProduto(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeProdutos, setListaDeProdutos] = useState(produtos);
    const [produtoSelecionado, setProdutoSelecionado] = useState({
        codigo: 0,
        descricao: "",
        precoCusto: 0,
        precoVenda: 0,
        qtdEstoque: 0,
        urlImagem: "",
        validade:""});
    const [modoEdicao, setModoEdicao] = useState(false);
    // os componentes passam a conhecer as "informações"
    return (
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" varaint ="success">
                    <h2>
                       Cadastro de Produto 
                    </h2>
                </Alert>
                {exibirTabela ? <TabelaProdutos listaDeProdutos={listaDeProdutos} setListaDeProdutos={setListaDeProdutos} setExibirTabela={setExibirTabela} setProdutoSelecionado={setProdutoSelecionado} setModoEdicao={setModoEdicao}/> :
                        <FormProduto listaDeProdutos={listaDeProdutos} setListaDeProdutos={setListaDeProdutos} setExibirTabela={setExibirTabela} setProdutoSelecionado={setProdutoSelecionado} produtoSelecionado={produtoSelecionado} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}/>} 

            </Pagina>
        </Container>
    );
}
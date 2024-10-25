import { Button, Container, Table } from "react-bootstrap";

export default function TabelaProdutos(props) {

    function excluirProduto(produto) {
        if(window.confirm("Deseja realmente excluir o produto "+produto.codigo)){
            props.setListaDeProdutos(props.listaDeProdutos.filter((item)=>{
                return item.codigo !== produto.codigo
            }));
            /*let novaLista = [];
            for (let i = 0; i < props.listaDeProdutos.lenght; i++)
            {
                if(props.listaDeProdutos[i].codigo != produto.codigo){
                    novaLista.push(props.listaDeProdutos[i]);
                }
            }
            props.setListaDeProdutos(novaLista);*/
        }
    }
    function editarProduto(produto) {
        props.setModoEdicao(true); // o estado passa a ser true
        props.setProdutoSelecionado(produto); // muda o estado do produto vazio, para o renderizado pelo parametro, atraves do click
        props.setExibirTabela(false); // para exibir  
      }
    return (
        <Container>
            <Button className="mb-3" variant="primary"
                onClick={() => {
                    props.setProdutoSelecionado(false);
                    props.setExibirTabela(false);
                }}>
                Adicionar
            </Button>
            <Table striped bordered hover size="sm">
                <thead>
                    <th>Código</th>
                    <th>Descrição</th>
                    <th>Preço de custo</th>
                    <th>Preço de venda</th>
                    <th>Qtde Estoque</th>
                    <th>Imagem</th>
                    <th>Validade</th>
                    <th>Açoes</th>
                </thead>
                <tbody>
                    {
                        props.listaDeProdutos?.map((produto) => {
                            return (
                                <tr>
                                    <td>{produto.codigo}</td>
                                    <td>{produto.descricao}</td>
                                    <td>{produto.precoCusto}</td>
                                    <td>{produto.precoVenda}</td>
                                    <td>{produto.qtdEstoque}</td>
                                    <td><img style={{ "width": "40px", "height": "40px" }} src={produto.urlImagem} alt="foto do produto" /></td>
                                    <td>{produto.validade}</td>
                                    <td>
                                        <Button onClick={()=>{
                                            editarProduto(produto); // passa n-enismo produto a ser rederizado
                                        }} variant="warning"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                        </svg></Button> <Button onClick={()=>{
                                            excluirProduto(produto);
                                        }} variant="danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                        </svg>Excluir</Button>

                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
            <p>Quantidade de produtos cadastrados: {props.listaDeProdutos.length}</p>
            <Button>Voltar</Button>
        </Container>
    );

}
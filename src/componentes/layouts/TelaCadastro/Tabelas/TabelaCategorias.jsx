import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function TabelaCategoria(props) {

    function excluirCategoria(categoria) {
        if(window.confirm("Deseja realmente excluir a categoria "+categoria.codigo)){
            props.setListaDeCategorias(props.listaDeCategorias.filter((item)=>{
                return item.codigo !== categoria.codigo
            }));
        
        }
    }
    function editarCategoria(categoria) {
        props.setModoEdicao(true); // o estado passa a ser true
        props.setCategoriaSelecionado(categoria); // muda o estado do produto vazio, para o renderizado pelo parametro, atraves do click
        props.setExibirTabela(false); // para exibir  
      }
    return (
        <Container>
            <Button className="mb-3" variant="primary"
                onClick={() => {
                    props.setCategoriaSelecionado(false);
                    props.setExibirTabela(false);
                }}>
                Adicionar
            </Button>
            <Table striped bordered hover size="sm">
                <thead>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Departamento</th>
                    <th>Data de Criação</th>
                    <th>Responsável</th>
                    <th>Açoes</th>
                </thead>
                <tbody>
                    {
                        props.listaDeCategorias?.map((categoria) => {
                            return (
                                <tr>
                                    <td>{categoria.codigo}</td>
                                    <td>{categoria.nome}</td>
                                    <td>{categoria.departamento}</td>
                                    <td>{categoria.dataCriacao}</td>
                                    <td>{categoria.responsavel}</td>
                                    <td>
                                        <Button onClick={()=>{
                                            editarCategoria(categoria); // passa n-enismo produto a ser rederizado
                                        }} variant="warning"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                        </svg></Button> <Button onClick={()=>{
                                            excluirCategoria(categoria);
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
            <p>Quantidade de categorias cadastradas: {props.listaDeCategorias.length}</p>
            <Button href="#" as ={Link} to ="/">Voltar</Button>
        </Container>
    );

}
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState} from 'react';
import { InputGroup } from 'react-bootstrap';
export default function FormEntregador(props){
    
    const [entregador, setEntregador] = useState(props.entregadorSelecionado);
    const [formValidado, setFormValidado] = useState(false);
    function manipularSubmissao(evento) {
  
      const form = evento.currentTarget;
      if (form.checkValidity()) {
        if (props.modoEdicao){ 
          props.setListaDeEntregador(props.listaDeEntregador.map((item) => {
            if (item.codigo !== entregador.codigo)
                return item
            else
                return entregador
           }));
          props.setModoEdicao(false);
          props.setEntregadorSelecionado({
            codigo: 0,
            nome: "",
            cpf: "",
            dtNascimento: "",
            endereco: "",
            telefone: 0,
            });
            props.setExibirTabela(true);
          
        }
        else{
         props.setListaDeEntregador([...props.listaDeEntregador, entregador]);
         props.setExibirTabela(true);
        }
        
      }
      else {
        setFormValidado(true);
      }
      evento.preventDefault();
      evento.stopPropagation();
    }
  
    function manipularMudanca(evento) {
      
      const elemento = evento.target.name;
      const valor = evento.target.value;
      setEntregador({...entregador, [elemento]: valor});
    }
    return (
      <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
        <Row className="mb-4">
          <Form.Group as={Col} md="4">
            <Form.Label>Código</Form.Label>
            <Form.Control
              required
              type="text"
              id="codigo"
              name="codigo"
              value={entregador.codigo}
              onChange={manipularMudanca}
              disabled ={props.modoEdicao} // quando o estado for true ou readOnly={props.modoEdicao} 
            />
            <Form.Control.Feedback type='invalid'>Por favor, informe o código do entregador!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col} md="12">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              type="text"
              id="nome"
              name="nome"
              value={entregador.nome}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback type="invalid">Por favor, informe o nome!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col} md="12">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              required
              type="text"
              id="cpf"
              name="cpf"
              value={entregador.cpf}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback type="invalid">Por favor, informe o CPF!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col} md="4">
            <Form.Label>Data de Nascimento</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                id="dtNascimento"
                name="dtNascimento"
                value={entregador.dtNascimento}
               onChange={manipularMudanca}
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor, informe a data de nascimento!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Endereço:</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                id="endereco"
                name="endereco"
                value={entregador.endereco}
                onChange={manipularMudanca}
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor, informe o preço de venda!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Telefone:</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                id="telefone"
                name="telefone"
                value={entregador.telefone}
                onChange={manipularMudanca}
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor, informe o telefone!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className='mt-2 mb-2'>
          <Col md={1} className='mr-2'>
            <Button type="submit">{props.modoEdicao ? "Alterar":"Confirmar"}</Button>
          </Col>
          <Col md={{ offset: 1 }}>
            <Button onClick={() => {
              props.setExibirTabela(true);
            }}>Voltar</Button>
          </Col>
        </Row>
      </Form>
    );
    
}
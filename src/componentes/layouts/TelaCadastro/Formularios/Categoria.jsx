import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState} from 'react';
import { InputGroup } from 'react-bootstrap';
export default function FormCategoria(props) {
  const [categoria, setCategoria] = useState(props.categoriaSelecionado); 
  const [formValidado, setFormValidado] = useState(false);
  function manipularSubmissao(evento) {

    const form = evento.currentTarget;
    if (form.checkValidity()) {
      if (props.modoEdicao){ 
        props.setListaDeCategorias(props.listaDeCategorias.map((item) => {
          if (item.codigo !== categoria.codigo)
              return item
          else
              return categoria
         }));
        props.setModoEdicao(false);
        props.setCategoriaSelecionado({codigo: 0,
          nome: "",
          departamento: "",
          dataCriacao: "",
          responsavel: ""
          });
          props.setExibirTabela(true);
        
      }
      else{
       props.setListaDeCategorias([...props.listaDeCategorias, categoria]);
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
    setCategoria({...categoria, [elemento]: valor });
  }
  return (
    <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
      <Row className="mb-4">
        <Form.Group as={Col} md="4">
          <Form.Label>Código:</Form.Label>
          <Form.Control
            required
            type="text"
            id="codigo"
            name="codigo"
            value={categoria.codigo}
            onChange={manipularMudanca}
            disabled ={props.modoEdicao} // quando o estado for true ou readOnly={props.modoEdicao} 
          />
          <Form.Control.Feedback type='invalid'>Por favor, informe o código da categoria!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="12">
          <Form.Label>Nome da Categoria:</Form.Label>
          <Form.Control
            required
            type="text"
            id="nome"
            name="nome"
            value={categoria.nome}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">Por favor, informe o nome da categoria!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="4">
          <Form.Label>Departamento:</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              id="departamento"
              name="departamento"
              value={categoria.departamento}
             onChange={manipularMudanca}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o departamento!
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Data De Criação:</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              id="dataCriacao"
              name="dataCriacao"
              value={categoria.dataCriacao}
              onChange={manipularMudanca}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a data de criacao!
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Responsavel:</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              id="responsavel"
              name="responsavel"
              value={categoria.responsavel}
              onChange={manipularMudanca}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o responsavel!
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

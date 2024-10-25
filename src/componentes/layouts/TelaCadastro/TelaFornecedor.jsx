import FormFornecedor from "./Formularios/Forncedor";
import Pagina from "../Pagina";
import { Container } from "react-bootstrap";
export default function TelaFornecedor(props){

    return (
        <Container>
         <Pagina>
            <FormFornecedor/>
         </Pagina>
        </Container>
    )
}
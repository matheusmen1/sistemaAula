import Pagina from "../Pagina";
import imagem404 from "../../../assets/imagens/pagina404.png"
import { Container } from "react-bootstrap";
export default function Tela404(props){

    return (
        <Pagina>
            <Container>
                <h1 className="text-center">O recurso solicitado não existe</h1>
                <img src={imagem404}/>
            </Container>
        </Pagina>
    );
}
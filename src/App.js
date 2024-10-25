import TelaCadastroCliente from "./componentes/layouts/TelaCadastro/TelaCadastroCliente";
import TelaCategoria from "./componentes/layouts/TelaCadastro/TelaCategoria";
import TelaCadastroFornecedor from "./componentes/layouts/TelaCadastro/TelaCadastroFornecedor";
import TelaCadastroUsuario from "./componentes/layouts/TelaCadastro/TelaCadastroUsuario";
import TelaProduto from "./componentes/layouts/TelaCadastro/TelaProduto";
import TelaMenu from "./componentes/layouts/TelaCadastro/TelaMenu";
import Tela404 from "./componentes/layouts/TelaCadastro/Tela404";
import TelaEntregador from "./componentes/layouts/TelaCadastro/TelaEntregador";
import { BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          {
            //A ordem das rotas é importante
          }
          <Routes>
            <Route path="/produto" element={<TelaProduto/>}/>
            <Route path="/categoria" element={<TelaCategoria/>}/>
            <Route path="/cliente" element={<TelaCadastroCliente/>}/>
            <Route path="/fornecedor" element={<TelaCadastroFornecedor/>}/>
            <Route path="/usuario" element={ <TelaCadastroUsuario/>}/>
            <Route path="/entregador" element={ <TelaEntregador/>}/>
            <Route path="/" element={<TelaMenu/>}/>
            <Route path="*" element={<Tela404/>}/>
          </Routes>
        </BrowserRouter>
      </div>
   
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import EstilosGlobais from "./components/EstilosGlobais";
import PaginaInicial from "./pages/PaginaInicial";
import Cadastro from "./pages/Cadastro";
import Editar from "./pages/Editar";
import Container from "./components/Container";
import EnderecosComponente from "./contexts/enderecos";

const App = () => {
    return (
        <>
            <EstilosGlobais />
            <Container>
                <EnderecosComponente>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<PaginaInicial />}>
                                <Route index element={<Cadastro />} />
                                <Route path="editar" element={<Editar />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </EnderecosComponente>
            </Container>
        </>
    );
};

export default App;

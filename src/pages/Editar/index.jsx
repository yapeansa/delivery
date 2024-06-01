import { useContext, useState } from "react";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import Formulario from "../../components/Formulario";
import TituloPrincipal from "../../components/TituloPrincipal";
import { ContextoEnderecos } from "../../contexts/enderecos";
import { useNavigate } from "react-router-dom";

const Editar = () => {

    const alterandoAtual = JSON.parse(localStorage.getItem("alteracao"));

    const [enderecos, setEnderecos] = useContext(ContextoEnderecos);

    const [alterarNome, setAlterarNome] = useState('');

    const navegar = useNavigate();

    const handleAlteracao = (valor) => {
        setAlterarNome(valor);
    };

    const handleEditar = (event) => {
        event.preventDefault();
        const alvo = JSON.parse(localStorage.getItem("listaEnderecos"));
        const indice = alvo.findIndex((item) => item.id === alterandoAtual.id);
        alvo[indice].nome = alterarNome;
        localStorage.setItem("listaEnderecos", JSON.stringify(alvo));
        setEnderecos([...alvo]);
        navegar("/");
    };

    return (
        <>
            <TituloPrincipal>Editar Endereço</TituloPrincipal>
            <Formulario onSubmit={(e) => handleEditar(e)}>
                <p style={{ fontSize: "1.1rem" }}>
                    Alterando endereço&nbsp;&nbsp;
                    <span style={{
                        color: "#8A2BE2",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        borderBottom: "1px solid #fff"
                    }}>
                        {alterandoAtual.nome}
                    </span>
                </p>
                <CampoTexto type="text" placeholder="Alterar endereço..." required minLength={4} onChange={(e) => handleAlteracao(e.target.value)} />
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                    <Botao type="submit" value="Alterar Endereço" />
                    <Botao type="button" value="Voltar" onClick={() => navegar("/")} />
                </div>
            </Formulario>
        </>
    );
};

export default Editar;

import { useContext, useState } from "react";
import { ContextoEnderecos } from "../../contexts/enderecos";
import { v4 as uuidv4 } from 'uuid';
import TituloPrincipal from "../../components/TituloPrincipal";
import CampoTexto from "../../components/CampoTexto";
import Formulario from "../../components/Formulario";
import Botao from "../../components/Botao";
import { CardEndereco, CardEnderecoContainer } from "../../components/CardEndereco";
import { useNavigate } from "react-router-dom";
import minimap from "../../assets/minimap.jpg";

const Cadastro = () => {

    const [enderecos, setEnderecos] = useContext(ContextoEnderecos);

    const [placeHolder, setPlaceHolder] = useState('Digite Cidade, País / Lote...');

    const [nome, setNome] = useState('');

    const navegar = useNavigate();

    const handleInput = (nomeEndereco) => {
        setNome(nomeEndereco)
    };

    const handleCadastro = (e) => {
        e.preventDefault();
        const pegaLista = JSON.parse(localStorage.getItem("listaEnderecos")) || [];
        const novoEndereco = {
            id: uuidv4(),
            nome: nome
        };
        localStorage.setItem("listaEnderecos", JSON.stringify([...pegaLista, novoEndereco]));
        setEnderecos([...pegaLista, novoEndereco]);
        e.target.reset();
    };

    const defineAlvo = (objId) => {
        const objeto = JSON.parse(localStorage.getItem("listaEnderecos"));
        const objetoAlvo = objeto.find(item => item.id === objId);
        localStorage.setItem("alteracao", JSON.stringify(objetoAlvo));
    };

    const chamada = (id) => {
        defineAlvo(id);
        navegar("/editar");
    };

    const chamadaExclusao = (id) => {
        defineAlvo(id);
        const alterandoAtual = JSON.parse(localStorage.getItem("alteracao"));
        const alvo = JSON.parse(localStorage.getItem("listaEnderecos"));
        const indice = alvo.findIndex((item) => item.id === alterandoAtual.id);
        alvo.splice(indice, 1);
        localStorage.setItem("listaEnderecos", JSON.stringify(alvo));
        setEnderecos([...alvo]);
    };

    const handlePlaceHolder = () => {
        placeHolder !== '' ? setPlaceHolder('') : setPlaceHolder('Digite Cidade, País / Lote...');
    };

    return (
        <>
            <TituloPrincipal>Cadastro de Endereços</TituloPrincipal>
            <Formulario onSubmit={(e) => handleCadastro(e)}>
                <CampoTexto
                    type="text"
                    placeholder={placeHolder}
                    required minLength={4}
                    onChange={(e) => handleInput(e.target.value)}
                    onFocus={() => handlePlaceHolder()}
                    onBlur={() => handlePlaceHolder()}
                />
                <Botao type="submit" value="CADASTRAR" />
            </Formulario>
            <h2>Lista de Endereços</h2>
            <p style={{ margin: "1rem 0", fontSize: "1.2rem" }}>A lista de endereços aparecerá logo abaixo:</p>
            <CardEnderecoContainer>
                {enderecos.map(endereco =>
                    <CardEndereco key={endereco.id}>
                        <div className="grade">
                            <img src={minimap} alt="Mini map from Unsplash.com" />
                            <p style={{ fontWeight: "bold", fontSize: "1.4rem" }}>Endereço: {endereco.nome}</p>
                            <button className="alteracoes btn1" onClick={() => chamada(endereco.id)}>
                                Editar Endereço
                            </button>
                            <button className="alteracoes btn2" onClick={() => chamadaExclusao(endereco.id)}>
                                Excluir Endereço
                            </button>
                        </div>
                    </CardEndereco>
                )}
            </CardEnderecoContainer>
        </>
    );
};

export default Cadastro;

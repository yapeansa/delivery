import styled from "styled-components"

const CardEnderecoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    max-width: 600px;
    margin: 3rem auto 0;
`

const CardEndereco = styled.div`
    padding: 1rem;
    border: 2px solid #ccc;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 16px;
    background: rgba(51, 51, 51, .6);
    .grade {
        display: grid;
        gap: 1rem;
        grid-template-areas:
        'imagem texto texto'
        'imagem botao1 botao2';
        justify-content: center;
        align-items: center;
        img {
            grid-area: imagem;
            max-width: 100%;
            border-radius: 16px;
            border: 2px solid #333;
        }
        p { grid-area: texto; }
        .btn1 { grid-area: botao1; }
        .btn2 { grid-area: botao2; }
        .alteracoes {
            border: 2px solid #8A2BE2;
            padding: 1rem;
            background: transparent;
            border-radius: 16px;
            font-weight: bold;
            color: #fff;
            cursor: pointer;
            transition: all .3s ease-in-out;
            font-size: 1.1rem;
            &:hover {
                background: #8A2BE2;
                color: #fff;
            }
        }
    }

    @media screen and (max-width: 600px) {
        .grade {
            grid-template-areas: 'texto texto'
            'imagem imagem'
            'botao1 botao2';
        }
    }

    @media screen and (max-width: 500px) {
        .grade {
            grid-template-areas: 'texto'
            'imagem'
            'botao1'
            'botao2';
        }
    }
`

export { CardEnderecoContainer, CardEndereco }

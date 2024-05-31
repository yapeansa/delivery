import styled from "styled-components"

const CampoTexto = styled.input`
    width: 100%;
    margin: 1rem auto;
    padding: 1rem;
    display: block;
    border: 2px solid #8A2BE2;
    background: transparent;
    border-radius: 16px;
    outline: none;
    font-size: 1.1rem;
    color: #fff;
    &::placeholder {
        opacity: 1;
        color: #fff;
    }
`

export default CampoTexto

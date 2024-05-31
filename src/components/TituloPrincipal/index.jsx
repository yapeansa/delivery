import styled from "styled-components"

const TituloPrincipal = styled.h1`
    text-align: center;
    display: inline-block;
    padding: .8rem 0;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        width: 20%;
        left: 50%;
        top: 100%;
        margin-left: calc(-20% / 2);
        background: #8A2BE2;
        height: 3px;
    }
`

export default TituloPrincipal

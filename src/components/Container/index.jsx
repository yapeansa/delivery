import styled from "styled-components";

const ContainerEstilizado = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    gap: 2.5rem;
    justify-content: center;
    background: rgba(0, 0, 0, .9);
    font-size: 1.2rem;

    @media screen and (max-width: 600px) {
        padding: 2rem 1.5rem;
    }
`;

const Container = ({ children }) => {
    return (
        <ContainerEstilizado>
            <main>
                {children}
            </main>
        </ContainerEstilizado>
    )
};

export default Container;

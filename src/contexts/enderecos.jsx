import { createContext, useState } from "react"

export const ContextoEnderecos = createContext()

const EnderecosComponente = ({ children }) => {

    const estadoInicial = JSON.parse(localStorage.getItem("listaEnderecos")) || []

    const [enderecos, setEnderecos] = useState(estadoInicial)

    return (
        <ContextoEnderecos.Provider value={[enderecos, setEnderecos]}>
            {children}
        </ContextoEnderecos.Provider>
    )
}

export default EnderecosComponente

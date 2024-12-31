
import React, { createContext } from 'react'

type ContextProviderProps = {
    children: React.ReactNode
}
const AppContext = createContext({

})
const ContextProvider = ({ children }: ContextProviderProps) => {
    
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider
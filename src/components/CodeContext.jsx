import React, { createContext, useContext, useState } from "react";

const CodeContext = createContext();

export const Codeprovider = ({ children }) => {
    const [theme, settheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const [contextusername, setcontextusername] = useState("")
    const [logedin, setlogedin] = useState(false)

    const value = {
        theme,
        settheme,
        contextusername,
        setcontextusername,
        logedin,
        setlogedin
    }

    return <CodeContext.Provider value={value}>
        {children}
    </CodeContext.Provider>
}

const themehook = () => {
    const context = useContext(CodeContext);
    return context
}

export default themehook
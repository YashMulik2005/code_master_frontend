import React, { createContext, useContext, useState } from "react";

const CodeContext = createContext();

export const Codeprovider = ({ children }) => {
    const [theme, settheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const [contextusername, setcontextusername] = useState(localStorage.getItem("username") ? localStorage.getItem("username") : "")
    const [logedin, setlogedin] = useState(localStorage.getItem("username") ? true : false)
    const [topic, settopic] = useState("all")
    const [topic_id, settopic_id] = useState()
    const [course_id, setcourse_id] = useState()
    const [navbar, setnavbar] = useState(false)
    const [queflag, setqueflag] = useState(false);
    const [certifyflag, setcertifyflag] = useState(false)
    const [border, setborder] = useState(true)
    const [index, setindex] = useState()
    const [timeout, settimeout] = useState(false)
    const [first, setfirst] = useState("")
    const [second, setsecond] = useState("")


    const value = {
        theme,
        settheme,
        first,
        setfirst,
        second,
        setsecond,
        contextusername,
        setcontextusername,
        logedin,
        setlogedin,
        topic,
        settopic,
        topic_id,
        settopic_id,
        course_id,
        setcourse_id,
        navbar,
        setnavbar,
        queflag,
        setqueflag,
        certifyflag,
        setcertifyflag,
        border,
        setborder,
        index,
        setindex,
        timeout,
        settimeout
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
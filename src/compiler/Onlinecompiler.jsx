import React, { useEffect, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { eclipse } from '@uiw/codemirror-theme-eclipse'
import { basicSetup } from '@uiw/react-codemirror'
import { closeBrackets } from '@codemirror/closebrackets'
import { flatIndent, indentOnInput } from '@codemirror/language'
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { javascript } from "@codemirror/lang-javascript";
import axios from 'axios'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { GrCloudComputer } from 'react-icons/gr'
import { SiCplusplus } from 'react-icons/si'
import { FaJava, FaPython } from 'react-icons/fa'
import { VscTriangleRight } from 'react-icons/vsc'
import themehook from '../components/CodeContext'
import { ClipLoader } from 'react-spinners'

function onlinecompiler() {
    const { theme, settheme } = themehook()
    const url = import.meta.env.VITE_BACKEND;

    const codedata = {
        "cpp14": `#include<iostream>\nusing namespace std;\nint main(){\n  cout<<"hello world"<<endl;\n  return 0;\n}`,
        "python": `print("hello world")`,
        "java": `public class Main{\n  public static main(String []args){\n    System.out.println("hello world");\n  }\n}`,
        "c": `#include<stdio.h>\nint main(){\n  printf("hello world");\n  return 0;\n}`
    }
    const [show, setshow] = useState(true)
    const [code, setcode] = useState(codedata.cpp14)
    const [language, setlanguage] = useState("cpp14")
    const [input, setinput] = useState("")
    const [output, setoutput] = useState("")
    const [editortheme, seteditortheme] = useState(theme == "light" ? eclipse : dracula)
    const [mode, setmode] = useState(cpp())
    const [loader, setloader] = useState(false)

    const getcode = React.useCallback((value, viewUpdate) => {
        setcode(value)
    }, [])

    const getinput = React.useCallback((value, viewUpdate) => {
        setinput(value)
    }, [])

    const data = {
        "language": language,
        "code": code,
        "input": input
    }

    const handlerun = async () => {
        setloader(true)
        try {
            const result = await axios.post(`${url}/practice/compiler`, { requestdata: data })
            console.log(result);
            setoutput(result.data.data.result.output)
            setshow(false)
        }
        catch (err) {
            console.log(err);
        }
        setloader(false)
    }

    const handletheme = () => {
        if (theme == "light") {
            settheme("dark")
            seteditortheme(dracula)
        }
        else {
            settheme("light")
            seteditortheme(eclipse)
        }
    }
    const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = ''; // This is required for Chrome to show a custom message
    };

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localtheme = localStorage.getItem("theme")
        document.querySelector('html').setAttribute("data-theme", localtheme)

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [theme])

    return (
        <div>
            <div className=' flex p-1 justify-between bg-[#edf1d6]'>
                <section className=' flex items-center'>
                    <GrCloudComputer size={30} />
                    <h1 className=' font-bold text-[#40513b] mx-2'><u>CODE MASTER</u></h1>
                </section>
                <section className=' flex'>
                    <SiCplusplus size={28} onClick={() => {
                        setlanguage("cpp14")
                        setcode(codedata.cpp14)
                        setmode(cpp())
                    }} className=' mx-2 text-black' />
                    <FaJava size={28} onClick={() => {
                        setlanguage("java")
                        setcode(codedata.java)
                        setmode(java())
                    }} className=' mx-2 text-black' />
                    <SiCplusplus size={28} onClick={() => {
                        setlanguage("c")
                        setcode(codedata.c)
                        setmode(cpp())
                    }} className=' mx-2 text-black' />
                    <FaPython size={28} onClick={() => {
                        setlanguage("python3")
                        setcode(codedata.python)
                        setmode(python())
                    }} className=' mx-2 text-black' />
                </section>
            </div>
            <div className=' flex border-t-[1px] border-b-[1px]'>
                <div className=' flex p-1 py-2 w-[100%] sm:w-[60%] relative justify-center'>
                    {theme == "light" ?
                        <MdDarkMode size={30} className='absolute left-2' onClick={handletheme} /> :
                        <MdOutlineLightMode size={30} className='absolute left-2' onClick={handletheme} />
                    }
                    <button className={` border-2 px-3 font-semibold mx-2 ${show ? "border-green-600" : ""} `} onClick={() => {
                        setshow(true)
                    }}>Editor</button>
                    <button className={` border-2 px-3 font-semibold mx-2 ${show ? "" : "border-green-600"} sm:hidden `} onClick={() => {
                        setshow(false)
                    }}>Output</button>
                    <section className='absolute right-2 flex'>
                        {loader && <ClipLoader size={25} color='green' />}
                        <button className='  px-3 font-semibold mx-2 text-white bg-green-600 flex items-center' onClick={handlerun}>run<VscTriangleRight size={20} /></button>
                    </section>
                </div>
                <div className=' hidden sm:flex p-1 py-2 w-[100%] sm:w-[40%] justify-between border-l-[1px]'>
                    <button className=' border-2 px-3 font-semibold mx-2'>Output</button>
                    <button className='  px-3 font-semibold mx-2 text-white bg-green-600' onClick={() => {
                        setoutput("")
                    }}>Clear</button>
                </div>
            </div>
            <div className=' flex w-[100%]'>
                <div className={`${show ? "" : " sm:block hidden"} w-[100%] sm:w-[60%]`}>
                    <CodeMirror className=' text-md'
                        value={code}
                        options={{
                            keyMap: "sublime",
                            mode: cpp(),
                            lineNumbers: true,
                            autoCloseBrackets: true,
                            gutters: ['CodeMirror-linenumbers'],
                            extraKeys: { 'Ctrl-Space': 'autocomplete' },
                            indentUnit: 4,
                            styleSelectedText: true,
                            matchBrackets: true,
                            highlightSelectionMatches: { minChars: 2 },
                            tabSize: 4,
                            indentWithTabs: false,
                            lineWrapping: true,
                            smartIndent: true,
                            autoCloseTags: true,
                            closeBrackets: true,
                            extensions: [basicSetup, closeBrackets(), indentOnInput()],

                        }}
                        theme={editortheme}
                        height='70vh'
                        extensions={[mode]}
                        onChange={getcode}
                    />
                    <CodeMirror className=' border-t-2'
                        theme={editortheme}
                        height='17vh'
                        onChange={getinput}
                        placeholder="input"
                    />
                </div>
                <div className={`${show ? " sm:block hidden" : ""} w-[100%] sm:w-[40%] `}>
                    <CodeMirror className=' sm:border-l-2'
                        value={output}
                        theme={editortheme}
                        height='87vh'
                    />
                </div>

            </div>
        </div>
    )
}

export default onlinecompiler
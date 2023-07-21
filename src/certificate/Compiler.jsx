import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import CodeMirror from '@uiw/react-codemirror'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { eclipse } from '@uiw/codemirror-theme-eclipse'
import { basicSetup } from '@uiw/react-codemirror'
import { closeBrackets } from '@codemirror/closebrackets'
import { flatIndent, indentOnInput } from '@codemirror/language'
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import axios from 'axios'
import { GiCancel } from 'react-icons/gi'
import themehook from '../components/CodeContext'
import { useNavigate, Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Compiler({ maindata, c_id }) {
    // console.log(c_id);
    const navigate = useNavigate()
    const url = import.meta.env.VITE_BACKEND;

    const { logedin, contextusername, setlogedin, setcontextusername } = themehook()
    const codedata = {
        "cpp14": `#include<iostream>\nusing namespace std;\nint main(){\n  cout<<"hello world"<<endl;\n  return 0;\n}`,
        "python": `print("hello world")`,
        "java": `Public class Main{\n  public static main(String []args){\n    System.out.println("hello world");\n  }\n}`,
        "c": `#include<stdio.h>\nint main(){\n  printf("hello world");\n  return 0;\n}`
    }
    const [code, setcode] = useState(codedata.cpp14)
    const [editortheme, seteditortheme] = useState(dracula)
    const [input, setinput] = useState(maindata.testcase1)
    const [mode, setmode] = useState(cpp())
    const [status, setstatus] = useState(false)
    const [message, setmessage] = useState("")
    const [output, setoutput] = useState()
    const [lan, setlan] = useState("cpp14")
    const [err, seterr] = useState(false)
    const [loader, setloader] = useState(false)
    // const history = useHistory();

    const getcode = React.useCallback((value, viewUpdate) => {
        setcode(value)
    }, [])

    const getinput = React.useCallback((value, viewUpdate) => {
        setinput(value)
    }, [])


    const handletheme = () => {
        if (editortheme == dracula) {
            seteditortheme(eclipse)
        }
        else {
            seteditortheme(dracula)
        }
    }

    const handlelan = (e) => {
        setlan(e.target.value)
        let l = e.target.value;
        (l == "cpp14" ? setcode(codedata.cpp14) :
            l == "java" ? setcode(codedata.java) :
                l == "c" ? setcode(codedata.c) :
                    l == "python3" ? setcode(codedata.python) : setcode(codedata.cpp14)
        )
    }

    const handlerun = async () => {
        const data = {
            "language": lan,
            "code": code,
            "input": input
        }
        if (!logedin) {
            toast.warn("login to run your code", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            setloader(true)
            const result = await axios.post(`${url}/practice/compiler`, { requestdata: data })
            console.log(result);
            setoutput(result.data.data.result.output)
            let ans = result.data.data.result.output;
            // if ("100\n" == maindata.testcase1_ans) {
            //     console.log("true");
            // }
            if (ans == maindata.testcase1_ans) {
                setmessage("sucessful")
                setstatus(true)
                seterr(true)
            }
            else {
                console.log(ans);
                console.log(maindata.testcase1_ans);
                setmessage("wrong ans")
                setstatus(true)
                seterr(false)
            }
            setloader(false)
        }
    }

    const handlesubmit = async () => {
        const data = {
            "language": lan,
            "code": code,
            "input": maindata.testcase2
        }
        if (!logedin) {
            toast.warn("login to submit your code", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
        else {
            setloader(true)
            const result = await axios.post(`${url}/practice/compiler`, { requestdata: data })
            console.log(result);
            let ans = result.data.data.result.output;
            // if (maindata.testcase2_ans == "0\n") {
            //     console.log("yes");
            // }
            if (ans == maindata.testcase2_ans) {
                const data = {
                    "username": contextusername,
                    "t_id": maindata._id,
                    "c_id": c_id
                }
                const res = await axios.post(`${url}/certify/solved`, { data: data })
                console.log(res);
                if (res.data.data.success) {
                    setmessage("sucessful")
                    setstatus(true)
                    seterr(true)
                    navigate(`/certificate/dashboard/${c_id}`)
                }
                else {
                    setmessage("Something went wrong submit aagin")
                    setstatus(true)
                    seterr(false)
                }
            }
            else {
                console.log(ans);
                console.log(maindata.testcase2_ans);
                setmessage("Wrong answer")
                setstatus(true)
                seterr(false)
            }
            setloader(false)
        }
    }

    const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = 'If you reload the page will become non-functional.'; // This is required for Chrome to show a custom message
    };

    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [])

    return (
        <div>   <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Successful !!!!!</h3>
                <p className="py-4">move to next question</p>
            </form>
        </dialog>
            <div className='  relative sm:static'>

                <div className={`flex justify-between  items-center p-2`}>
                    <form action="">
                        <select name="language" className=' py-[2px] px-6' onChange={handlelan} >
                            <option value="cpp14">C++</option>
                            <option value="c">c</option>
                            <option value="java">Java</option>
                            <option value="python3">Python</option>
                        </select>
                    </form>
                    {/* <h1>{lan}</h1> */}
                    <MdDarkMode size={30} onClick={handletheme} />
                </div>
                <div className=' px-2'>
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
                        height='52vh'
                        extensions={[mode]}
                        onChange={getcode}
                    />
                </div>
                <div className=' p-2'>
                    <h1 className='px-4 font-semibold'>Input </h1>
                    <CodeMirror className=''
                        theme={editortheme}
                        height='21vh'
                        onChange={getinput}
                        value={input}
                    />
                </div>
                <div id="output">
                    {(loader ? <section className=' p-2 flex justify-center items-center font-bold'>
                        <BeatLoader size={15} color='green' />
                        <h1 className=' text-lg mx-2'>Compiling</h1>
                    </section> :
                        <div className={`${status ? "" : " hidden"}  p-1 px-7`} >
                            <section className={`${err ? "bg-green-600" : "bg-red-500"} text-white p-2 flex items-center justify-between rounded`}>
                                <h1>{message}</h1>
                                <GiCancel size={20} onClick={() => {
                                    setstatus(false)
                                }} />
                            </section>
                        </div>
                    )}

                </div>
                <div className=' p-2'>
                    <h1 className='px-4 font-semibold'>Output</h1>
                    <CodeMirror className=''
                        value={output}
                        theme={editortheme}
                        height='21vh'
                    />
                </div>
                <div className=' p-2 absolute right-4 bottom-2'>
                    <button onClick={handlerun} className=' bg-green-600 text-white px-6 py-[6px] rounded-lg mx-2 font-semibold'> <a href="#output">run</a></button>
                    <button onClick={handlesubmit} className=' bg-green-600 text-white px-6 py-[6px] rounded-lg mx-2 font-semibold'><a href='#output'>Submit</a></button>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Compiler
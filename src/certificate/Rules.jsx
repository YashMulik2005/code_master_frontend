import React, { useEffect, useRef } from 'react'
import themehook from '../components/CodeContext'
import { Link, useParams } from 'react-router-dom'
import { motion, useInView, useAnimation } from 'framer-motion'

function Rules() {
    const { theme } = themehook()
    const { id } = useParams()
    console.log(id);

    const div1 = useRef(null)
    const div2 = useRef(null)
    const div3 = useRef(null)
    const div4 = useRef(null)
    const isInView1 = useInView(div1, { once: false })
    const isInView2 = useInView(div2, { once: false })
    const isInView3 = useInView(div3, { once: false })
    const isInView4 = useInView(div4, { once: false })
    // const div1Controls = useAnimation()
    // const div2Controls = useAnimation()

    const animateleft = {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 }
    }

    const animateright = {
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 }
    }
    const animation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }
    const transition = {
        duration: 0.5

    }
    const transition2 = {
        duration: 0.5,
        delay: 0.50
    }

    // useEffect(() => {
    //     if (isInView1) {
    //         div1Controls.start("visible")
    //     }
    //     if (isInView2) {
    //         div2Controls.start("visible")
    //     }
    // }, [isInView1, isInView2])

    return (
        <div className=' flex flex-col sm:flex-row'>
            <div className={` w-[100%] sm:w-[30%] sm:h-[100vh] flex justify-center items-center p-4 flex-col bg-green-700  text-white`}>
                <h1 className='text-[24px] font-bold'>Codemaster Certify</h1>
                <h1 className='font-semibold text-[15px] text-center'>Unlock Your Potential with Code Master certification.</h1>
                <h1 className='font-semibold text-[15px] text-center'> Certify Your Skills, Showcase Your Hard Work, and Validate Your Knowledge. Elevate Your Career with Confidence!</h1>
            </div>

            <div className=' w-[100%] sm:w-[70%] h-[100vh] p-3 sm:overflow-y-auto' >
                <h1 className={`${theme == "light" ? "text-black" : "text-white"} text-xl font-bold text-center`}>Rules for certification</h1>
                <motion.div className=' flex justify-end px-3' ref={div1}>
                    <section className={`w-[50%] p-3 m-4 my-2 ${theme == "light" ? "bg-[#f5f1f0] border-[1px]" : "bg-[#0c131d]"} rounded-sm `}>
                        <motion.p>Solve both Questions completely and click on Finish button to submit test for certfication.</motion.p>
                    </section>
                </motion.div>

                <motion.div className=' flex justify-start px-3' ref={div2}>
                    <section className={`w-[50%] p-3 m-4 my-3 ${theme == "light" ? "bg-[#f5f1f0] border-[1px]" : "bg-[#0c131d]"} rounded-sm `}>
                        <p>If you not finish test by clicking on finish button then your attempt will not be considered for certification and you will not get certificate for skill.</p>
                    </section>
                </motion.div>

                <motion.div className=' flex justify-end px-3' ref={div3}>
                    <section className={`w-[50%] p-3 m-4 my-2 ${theme == "light" ? "bg-[#f5f1f0] border-[1px]" : "bg-[#0c131d]"} rounded-sm `}>
                        <p>Click on stop button to terminate the skill assesment and then you will not get certificate for skill. Don't press back or refresh page.</p>
                    </section>
                </motion.div>

                <motion.div className=' flex justify-start px-3' ref={div4}>

                    <section className={`w-[50%] p-3 m-4 my-2 ${theme == "light" ? "bg-[#f5f1f0] border-[1px]" : "bg-[#0c131d]"} rounded-sm `}>
                        <p>In assesment you have to solve two question, each question have time limit of 15 minutes to solve and you have to solve both questions in time and finish assesment for certification of perticular skill.</p>
                    </section>
                </motion.div>

                <section className=' flex justify-center'>
                    <button className=' border-[1px] hover:bg-green-600 hover:text-white hover:border-none px-6 py-[3px] border-gray-300 rounded-3xl font-semibold my-4 '><Link to={`/certificate/dashboard/${id}`}> start </Link></button>
                </section>
            </div>
        </div>

    )
}

export default Rules
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
            <div className={` w-[100%] sm:w-[35%] sm:h-[100vh] flex justify-center items-center p-4 flex-col bg-green-600  text-white`}>
                <h1 className=' text-3xl font-bold m-2'>yugewfyevguye</h1>
                <p className=' text-lg m-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem corporis debitis, placeat neque impedit saepe animi ea, vel laboriosam commodi dolorem cupiditate.</p>
            </div>

            <div className=' w-[100%] sm:w-[65%] h-[100vh] p-2 sm:overflow-y-auto sm:py-32' >
                <motion.div className=' flex justify-end px-3' ref={div1}
                    variants={animateleft}
                    initial="hidden"
                    animate={isInView1 ? "visible" : "hidden"}
                    transition={transition}>
                    <section className={`w-[50%] p-3 m-4 my-6 ${theme == "light" ? "bg-[#edf1d6] shadow-[8px_8px_16px_#afafaf,-8px_-8px_16px_#ffffff]" : "bg-[#191919] shadow-lg"}  `}>
                        <motion.p
                            variants={animation}
                            initial="hidden"
                            animate={isInView1 ? "visible" : "hidden"}
                            transition={transition2}
                        >aspernatur eius animi mollitia minus, numquam reprehenderit pariatur perferendis odit doloribus, quo possimus officiis inventore. Laboriosam, perferendis provident.</motion.p>
                    </section>
                </motion.div>

                <motion.div className=' flex justify-start px-3' ref={div2}
                    variants={animateright}
                    initial="hidden"
                    animate={isInView2 ? "visible" : "hidden"}
                    transition={transition}>
                    <section className={`w-[50%] p-3 m-4 my-6 ${theme == "light" ? "bg-[#edf1d6] shadow-[8px_8px_16px_#afafaf,-8px_-8px_16px_#ffffff]" : "bg-[#191919] shadow-lg"}  `}>
                        <p>aspernatur eius animi mollitia minus, numquam reprehenderit pariatur perferendis odit doloribus, quo possimus officiis inventore. Laboriosam, perferendis provident.</p>
                    </section>
                </motion.div>

                <motion.div className=' flex justify-end px-3' ref={div3}
                    variants={animateleft}
                    initial="hidden"
                    animate={isInView3 ? "visible" : "hidden"}
                    transition={transition}
                >
                    <section className={`w-[50%] p-3 m-4 my-6 ${theme == "light" ? "bg-[#edf1d6] shadow-[8px_8px_16px_#afafaf,-8px_-8px_16px_#ffffff]" : "bg-[#191919] shadow-lg"}  `}>
                        <p>aspernatur eius animi mollitia minus, numquam reprehenderit pariatur perferendis odit doloribus, quo possimus officiis inventore. Laboriosam, perferendis provident.</p>
                    </section>
                </motion.div>

                <motion.div className=' flex justify-start px-3' ref={div4}
                    variants={animateright}
                    initial="hidden"
                    animate={isInView4 ? "visible" : "hidden"}
                    transition={transition}
                >
                    <section className={`w-[50%] p-3 m-4 my-6 ${theme == "light" ? "bg-[#edf1d6] shadow-[8px_8px_16px_#afafaf,-8px_-8px_16px_#ffffff]" : "bg-[#191919] shadow-lg"}  `}>
                        <p>aspernatur eius animi mollitia minus, numquam reprehenderit pariatur perferendis odit doloribus, quo possimus officiis inventore. Laboriosam, perferendis provident.</p>
                    </section>
                </motion.div>
                <section className=' flex justify-center'>
                    <button className=' bg-green-600 text-white px-7 py-1 rounded-3xl font-semibold my-4 '><Link to={`/certificate/dashboard/${id}`}> start </Link></button>
                </section>
            </div>
        </div>

    )
}

export default Rules
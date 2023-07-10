import React, { useEffect, useState } from 'react'

function Questiontext({ maindata }) {

    useEffect(() => {
    }, [])

    return (
        <div>
            <div className=' overflow-y-auto p-4'>
                <section className=' py-2'>
                    <h1 className=' text-3xl font-semibold my-2'>Problem</h1>
                    <p>{maindata.description}</p>
                </section>
                <section className=' py-2'>
                    <h1 className=' text-2xl font-semibold my-2'>Input format</h1>
                    <p>{maindata.input_format}</p>
                </section>
                <section className=' py-2'>
                    <h1 className=' text-2xl font-semibold my-2'>Output format</h1>
                    <p>{maindata.output_format}</p>
                </section>
                <section className='p-3'>
                    <h1 className=' text-xl font-semibold my-2'>Sample 1:</h1>
                    <table className=' border-collapse w-[90%] bg-gray-900 border-gray-700 text-white'>
                        <thead>
                            <tr className=''>
                                <th className=' border-b-[1px] border-r-[1px] p-3 w-[50%]'>input</th>
                                <th className=' border-b-[1px] p-3 w-[50%]'>output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=' border-r-[1px] p-3'><pre>{maindata.testcase1}</pre></td>
                                <td className='p-3'><pre>{maindata.testcase1_ans}</pre></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className='p-3'>
                    <h1 className=' text-xl font-semibold my-2'>Sample 2:</h1>
                    <table className=' border-collapse w-[90%] bg-gray-900 border-gray-700 text-white'>
                        <thead>
                            <tr className=''>
                                <th className=' border-b-[1px] border-r-[1px] p-3 w-[50%]'>input</th>
                                <th className=' border-b-[1px] p-3 w-[50%]'>output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=' border-r-[1px] p-3'><pre>{maindata.testcase2}</pre></td>
                                <td className='p-3'><pre>{maindata.testcase2_ans}</pre></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className={`${maindata.explanation == null ? " hidden" : ""} py-2`}>
                    <h1 className=' text-xl font-semibold my-2'>Explanation:</h1>
                    <p>{maindata.explanation}</p>
                </section>
            </div>



        </div>
    )
}

export default Questiontext
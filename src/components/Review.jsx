import React from 'react'
import themehook from './CodeContext'
import { BiSolidUserCircle } from 'react-icons/bi'

function Review() {
    const { theme } = themehook()
    return (
        <div className=' w-[100%] p-5'>
            <h1 className=' text-center text-xl text-green-600 font-bold m-3'>Review of some users</h1>
            <div className='flex flex-col min-[800px]:flex-row p-2 px-5'>
                <section className={` mx-2 ${theme == "light" ? "bg-[#f5f1f0] " : "bg-[#0c131d]"} w-[100%] min-[800px]:w-1/4 mb-2 min-[800px]:mb-0 border-[1px] flex flex-col justify-center items-center rounded-lg`}>
                    <section className=' flex flex-col justify-center items-center bg-green-600 w-[100%] rounded-t-lg p-2'>
                        <BiSolidUserCircle size={70} color='white' />
                        <h1 className=' text-xl font-bold text-white'>username</h1>
                    </section>
                    <section className='p-4'>
                        <p className=' text-center'>spernatur recusandae corporis est amet quia nobis dolor, adipisci dignissimos hic incidunt animi ipsum. Laborum aut labore soluta neque dolorem. Praesentium.</p>
                        <p className=' text-center'>start</p>
                    </section>
                </section>
                <section className={` mx-2 ${theme == "light" ? "bg-[#f5f1f0] " : "bg-[#0c131d]"} w-[100%] min-[800px]:w-1/4 mb-2 min-[800px]:mb-0 border-[1px] flex flex-col justify-center items-center rounded-lg`}>
                    <section className=' flex flex-col justify-center items-center bg-green-600 w-[100%] rounded-t-lg p-2'>
                        <BiSolidUserCircle size={70} color='white' />
                        <h1 className=' text-xl font-bold text-white'>username</h1>
                    </section>
                    <section className='p-4'>
                        <p className=' text-center'>spernatur recusandae corporis est amet quia nobis dolor, adipisci dignissimos hic incidunt animi ipsum. Laborum aut labore soluta neque dolorem. Praesentium.</p>
                        <p className=' text-center'>start</p>
                    </section>
                </section>
                <section className={` mx-2 ${theme == "light" ? "bg-[#f5f1f0] " : "bg-[#0c131d]"} w-[100%] min-[800px]:w-1/4 mb-2 min-[800px]:mb-0 border-[1px] flex flex-col justify-center items-center rounded-lg`}>
                    <section className=' flex flex-col justify-center items-center bg-green-600 w-[100%] rounded-t-lg p-2'>
                        <BiSolidUserCircle size={70} color='white' />
                        <h1 className=' text-xl font-bold text-white'>username</h1>
                    </section>
                    <section className='p-4'>
                        <p className=' text-center'>spernatur recusandae corporis est amet quia nobis dolor, adipisci dignissimos hic incidunt animi ipsum. Laborum aut labore soluta neque dolorem. Praesentium.</p>
                        <p className=' text-center'>start</p>
                    </section>
                </section>
                <section className={` mx-2 ${theme == "light" ? "bg-[#f5f1f0] " : "bg-[#0c131d]"} w-[100%] min-[800px]:w-1/4 mb-2 min-[800px]:mb-0border-[1px] flex flex-col justify-center items-center rounded-lg`}>
                    <section className=' flex flex-col justify-center items-center bg-green-600 w-[100%] rounded-t-lg p-2'>
                        <BiSolidUserCircle size={70} color='white' />
                        <h1 className=' text-xl font-bold text-white'>username</h1>
                    </section>
                    <section className='p-4'>
                        <p className=' text-center'>spernatur recusandae corporis est amet quia nobis dolor, adipisci dignissimos hic incidunt animi ipsum. Laborum aut labore soluta neque dolorem. Praesentium.</p>
                        <p className=' text-center'>start</p>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Review
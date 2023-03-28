import React, { useState } from 'react'
import video0 from './videos/video0.mp4'
import video1 from './videos/video1.mp4'
import video2 from './videos/video2.mp4'

function Video() {

    const [count, setCount] = useState(0)

    const [form, setForm] = useState(true)
    const videoArry = [
        video0, video1, video2
    ]
    const [videosrc, setVideosrc] = useState(videoArry[0])



    const handle = (i) => {
        setVideosrc(videoArry[i])
        setCount(i)
    }


    return (
        <div className='flex '>

            <div className='w-[50%] h-screen'>
                <video src={videosrc} controls autoPlay muted className='w-full h-screen object-cover ' width='320'  >

                </video>
            </div>

            <div className='w-[50%] h-screen flex  justify-center items-center'>
                <div className={`w-full flex flex-col items-center justify-center ${count === 0 ? 'block' : 'hidden'}`}>



                    <button onClick={() => handle(1)} className=' bg-[#1111751a] border border-white w-[336px] mt-[12px] text-left px-6 py-4 rounded-[30px] text-slate-900 cursor-pointer hover:border hover:border-[#7D00FE] text-[18px] font-semibold  '><span className=' py-[6px] px-[12px]  mr-3 font-semibold items-center justify-center text-white bg-[#7D00FE] rounded-full'>A</span> Campaign structure</button>

                    <button onClick={() => handle(2)} className=' bg-[#1111751a] border border-white w-[336px] mt-[12px] text-left px-6 py-4 rounded-[30px] text-slate-900 cursor-pointer hover:border hover:border-[#7D00FE] text-[18px] font-semibold  '><span className=' py-[6px] px-[12px]  mr-3 font-semibold items-center justify-center text-white bg-[#7D00FE] rounded-full'>A</span> Learn Facebook basics</button>

                    <button onClick={() => handle(1)} className=' bg-[#1111751a] border border-white w-[336px] mt-[12px] text-left px-6 py-4 rounded-[30px] text-slate-900 cursor-pointer hover:border hover:border-[#7D00FE] text-[18px] font-semibold  '><span className=' py-[6px] px-[12px]  mr-3 font-semibold items-center justify-center text-white bg-[#7D00FE] rounded-full'>A</span> 3rd choice</button>

                </div>

                <div className={`w-full flex flex-col items-center justify-center ${count === 1 ? 'block' : 'hidden'}`}>
                    <button onClick={() => { setForm(!form) }} className=
                        {` ${form ? 'block' : 'hidden'} w-[332px] tracking-wide h-[68px] hover:scale-105 shadow-md bg-[#7D00FE] flex items-center justify-center  text-lg font-semibold text-white px-[24px] rounded-[20px]`} >Download "Campaign Structure Guide"</button>
                    <div className={` ${form ? 'hidden' : 'block'} px-24 space-y-6`}>
                        <h3 className='font-semibold text-2xl text-slate-900 tracking-wide '>Before you go, please leave your contact details so we can get back to you...</h3>
                        <form action="#" className='space-y-6'>
                            <input type="text" name='name' placeholder='*Your name' className='w-full text-xl p-4 outline-none border-b ' />
                            <input type="check" name='email' placeholder='*Your email' className='w-full text-xl p-4 outline-none border-b ' />
                            <input type="checkbox" name="checkbox" className='border border-black' />
                            <label htmlFor="checkbox" className='text-sm text-slate-500'>  * [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. 
                            Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX.</label>
                            <button className='w-full tracking-wide h-[68px] hover:scale-105 shadow-md bg-[#7D00FE] flex items-center justify-center  text-lg font-semibold text-white px-[24px] rounded-[20px]'>Send your answer ⟶</button>

                        </form>
                    </div>
                </div>


                <div className={`w-full flex flex-col items-center justify-center ${count === 2 ? 'block' : 'hidden'}`}>
                    <button onClick={() => { setForm(!form) }} className={` ${form ? 'block' : 'hidden'} w-[332px] tracking-wide h-[68px] hover:scale-105 shadow-md bg-[#7D00FE] flex items-center justify-center  text-lg font-semibold text-white px-[24px] rounded-[20px]`} >Sign up for free webinar</button>
                    <div className={` ${form ? 'hidden' : 'block'} px-24 space-y-6`}>
                        <h3 className='font-semibold text-2xl text-slate-900 tracking-wide '>Before you go, please leave your contact details so we can get back to you...</h3>
                        <form action="#" className='space-y-6'>
                            <input type="text" name='name' placeholder='*Your name' className='w-full text-xl p-4 outline-none border-b ' />
                            <input type="check" name='email' placeholder='*Your email' className='w-full text-xl p-4 outline-none border-b ' />
                            <input type="checkbox" name="checkbox" className='border border-black' />
                            <label htmlFor="checkbox" className='text-sm text-slate-500'>  * [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX.
                             Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX.</label>
                            <button className='w-full tracking-wide h-[68px] hover:scale-105 shadow-md bg-[#7D00FE] flex items-center justify-center  text-lg font-semibold text-white px-[24px] rounded-[20px]'>Send your answer ⟶</button>

                        </form>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Video
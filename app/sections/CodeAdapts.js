import Image from 'next/image'
import React from 'react'
import platformIcon from '../../public/img/platform.png'
import languageIcon from '../../public/img/language.png'
import frameworkIcon from '../../public/img/framework.png'
import cloudIcon from '../../public/img/cloud.png'
import toolsIcon from '../../public/img/tools.png'
import arrowIcon from '../../public/img/arrow.png'

const CodeAdapts = () => {
    return (
        <div className='container mx-auto m-32 flex flex-col items-center'>
            <div className='flex flex-col justify-center items-center gap-8'>
                <h3 className='bg-[#ffe7d2] px-6 py-1 rounded-4xl'>Code Adapts</h3>
                <h2 className='font-bold text-5xl text-center'>Built To Fit Your Vision,Not The <br /><span className='text-[#3254ec]'> Other Way Around</span></h2>
                <p className='text-[#677489] text-base'>We craft custom code and systems that adapt to your needs, not cookie-cutter solutions.</p>
            </div>
            <div className='grid grid-cols-5 place-items-center mt-10 h-90 w-[1000px]'>
                <div className='flex flex-col items-center gap-4 px-10 py-12 bg-[#fbf7fa] rounded-full self-end '>
                    <Image src={platformIcon} alt='platform-icon'></Image>
                    <p className='font-bold'>Platform</p>
                    <p className='bg-[#ad609e] p-3 rounded-full w-14 text-center font-bold text-white text-xl absolute mt-42'>1</p>
                </div>
                <div className='flex flex-col items-center gap-4 px-10 py-12 bg-[#fbf7fa] rounded-full'>
                    <Image src={languageIcon} alt='language-icon'></Image>
                    <p className='font-bold'>Platform</p>
                    <p className='bg-[#ad609e] p-3 rounded-full w-14 text-center font-bold text-white text-xl absolute mt-42'>1</p>
                </div>
                <div className='flex flex-col items-center gap-4 px-10 py-12 bg-[#fbf7fa] rounded-full self-start'>
                    <Image src={frameworkIcon} alt='framework-icon'></Image>
                    <p className='font-bold'>Platform</p>
                    <p className='bg-[#ad609e] p-3 rounded-full w-14 text-center font-bold text-white text-xl absolute mt-42'>1</p>
                </div>
                <div className='flex flex-col items-center gap-4 px-10 py-12 bg-[#fbf7fa] rounded-full'>
                    <Image src={cloudIcon} alt='cloud-icon'></Image>
                    <p className='font-bold'>Platform</p>
                    <p className='bg-[#ad609e] p-3 rounded-full w-14 text-center font-bold text-white text-xl absolute mt-42'>1</p>
                </div>
                <div className='flex flex-col items-center gap-4 px-10 py-12 bg-[#fbf7fa] rounded-full self-end'>
                    <Image src={toolsIcon} alt='tool-icon'></Image>
                    <p className='font-bold'>Platform</p>
                    <p className='bg-[#ad609e] p-3 rounded-full w-14 text-center font-bold text-white text-xl absolute mt-42'>1</p>
                </div>
            </div>
            <Image src={arrowIcon} alt='arrow-icon'></Image>
        </div>
    )
}

export default CodeAdapts

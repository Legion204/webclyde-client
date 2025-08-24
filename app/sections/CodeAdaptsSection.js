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
        <div className='container mx-auto flex flex-col items-center mt-32'>
            <div className='flex flex-col justify-center items-center gap-8 text-center'>
                <h3 className='bg-[#ffe7d2] px-6 py-1 rounded-4xl'>Code Adapts</h3>
                <h2 className='font-bold text-5xl text-center'>Built To Fit Your Vision,Not The <br /><span className='text-[#3254ec]'> Other Way Around</span></h2>
                <p className='text-[#677489] text-base'>We craft custom code and systems that adapt to your needs, not cookie-cutter solutions.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 place-items-center mt-10 md:h-96 w-full space-y-10'>
                <div className='flex flex-col items-center gap-4 px-10 py-12 bg-[#AD609E33] rounded-full self-end '>
                    <Image src={platformIcon} alt='platform-icon'></Image>
                    <p className='font-bold'>Platform</p>
                    <p className='bg-[#AD609E] p-3 rounded-full w-14 text-center font-bold text-white text-xl absolute mt-42'>1</p>
                </div>
                <div className='flex flex-col items-center gap-4 px-10 py-12 bg-[#328DFF33] rounded-full'>
                    <Image src={languageIcon} alt='language-icon'></Image>
                    <p className='font-bold'>Platform</p>
                    <p className='bg-[#328DFF] p-3 rounded-full w-14 text-center font-bold text-white text-xl absolute mt-42'>2</p>
                </div>
                <div className='flex flex-col items-center gap-4 px-10 py-12 bg-[#644a9e33] rounded-full self-start'>
                    <Image src={frameworkIcon} alt='framework-icon'></Image>
                    <p className='font-bold'>Platform</p>
                    <p className='bg-[#644a9e] p-3 rounded-full w-14 text-center font-bold text-white text-xl absolute mt-42'>3</p>
                </div>
                <div className='flex flex-col items-center gap-4 px-10 py-12 bg-[#00BDB233] rounded-full'>
                    <Image src={cloudIcon} alt='cloud-icon'></Image>
                    <p className='font-bold'>Platform</p>
                    <p className='bg-[#00BDB2] p-3 rounded-full w-14 text-center font-bold text-white text-xl absolute mt-42'>4</p>
                </div>
                <div className='flex flex-col items-center gap-4 px-10 py-12 bg-[#F5962033] rounded-full self-end col-span-2 md:col-span-1 '>
                    <Image src={toolsIcon} alt='tool-icon'></Image>
                    <p className='font-bold'>Platform</p>
                    <p className='bg-[#F59620] p-3 rounded-full w-14 text-center font-bold text-white text-xl absolute mt-42'>5</p>
                </div>
            </div>
            <Image className='mt-8' src={arrowIcon} alt='arrow-icon'></Image>
        </div>
    )
}

export default CodeAdapts

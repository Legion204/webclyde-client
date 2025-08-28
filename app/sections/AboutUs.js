import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
    return (
        <section className='container mx-auto bg-[#0E1014] py-32 p-32 '>
            <div className='flex flex-col justify-center items-center gap-8 text-center mb-16'>
                <h3 className='bg-[#ffe7d2] px-6 py-1 rounded-4xl'>About Us</h3>
                <h2 className='font-bold text-5xl text-center text-white'>Powered by WebClyde</h2>
                <p className='text-white text-base'>Our working process is structured to ensure efficiency, transparency, and high-quality results.</p>
            </div>
            <div className='grid grid-rows-2 justify-center gap-10 border-b-1 border-white '>
                <div className='flex justify-center items-center gap-2'>
                    <div className='flex items-center'>
                        <p className='text-white bg-[#FF8720] w-12 px-3 py-2 text-center rounded-full text-xl font-bold'>1</p>
                        <progress className="progress w-40 text-[#FF8720] h-2" value="100" max="100"></progress>
                    </div>
                    <progress className="progress w-70 text-[#3254ECCC]" value="100" max="100"></progress>
                    <progress className="progress w-40 text-[#3254ECCC]" value="100" max="100"></progress>
                    <progress className="progress w-64 text-[#3254ECCC]" value="100" max="100"></progress>
                </div>
                <div className='flex gap-13'>
                    <p className='text-white text-2xl font-bold'>How We Help</p>
                    <p className='text-[#A8ACB2] text-2xl font-bold'>What We Do for You</p>
                    <p className='text-[#A8ACB2] text-2xl font-bold'>Our Impact</p>
                    <p className='text-[#A8ACB2] text-2xl font-bold'>How We Drive Results</p>
                </div>
            </div>
            <ul className='text-[#CFD7E5]  space-y-4 mt-4'>
                <li className='flex items-center gap-1'><FaCheckCircle className='text-[#fb8601] bg-white rounded-full'/>Your ideas deserve more than code; they deserve momentum.</li>
                <li className='flex items-baseline gap-1'><FaCheckCircle className='text-[#fb8601] bg-white rounded-full'/>At WebClyde, we don`t just build. We guide, consult, and collaborate to help you shape smarter digital products faster. <br /> Whether you`re starting from scratch or scaling up, we bring clarity, expertise, and execution.</li>
                <li className='flex items-center gap-1'><FaCheckCircle className='text-[#fb8601] bg-white rounded-full'/>From MVPs to full-scale platforms, our team is here to help you design with purpose, develop with precision, and launch with confidence.</li>
            </ul>
             <button className="px-8 py-3 mt-12 text-lg font-semibold rounded bg-[#3254ec] text-white">Let’s map your vision into a winning product</button>
        </section>
    )
}

export default AboutUs

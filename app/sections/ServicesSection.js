import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { SlArrowRight } from "react-icons/sl";
import AIC from '../../public/img/AIC.png'
import CAD from '../../public/img/CAD.png'
import CAPI from '../../public/img/CAPI.png'
import CWD from '../../public/img/CWD.png'
import DI from '../../public/img/DI.png'
import MLI from '../../public/img/MLI.png'

const Services = () => {
    return (
        <div className='container mx-auto flex flex-col items-center mt-32'>
            <div className='flex flex-col justify-center items-center gap-8 text-center mb-16'>
                <h3 className='bg-[#ffe7d2] px-6 py-1 rounded-4xl'>Our Services</h3>
                <h2 className='font-bold text-5xl text-center'>Strategic Tech Partners &  <br /><span className='text-[#3254ec]'> Product Builders</span></h2>
                <p className='text-[#677489] text-base'>From planning to launch, we help you lay the right digital foundation and build on it.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5'>
                <div className='flex flex-col gap-5 bg-[#AD609E33] p-12 md:p-16 lg:p-18  rounded-2xl'>
                    <Image src={AIC} alt='AI Consulting & Implementation'></Image>
                    <h2 className='font-normal text-2xl'>AI Consulting & Implementation</h2>
                    <p className='font-normal text-base text-[#677489]'>We help you harness AI to solve real business problems, not just chase trends. From chatbots and recommendation engines to process automation and predictive analytics, we build...</p>
                    <Link className='font-semibold text-[#AD609E] flex items-center gap-1' href={'/'}>Learn More<SlArrowRight/></Link>
                </div>
                <div className='flex flex-col gap-5 bg-[#00BDB233] p-12 md:p-16 lg:p-18  rounded-2xl'>
                    <Image src={MLI} alt='Machine Learning & Intelligent Systems'></Image>
                    <h2 className='font-normal text-2xl'>Machine Learning & Intelligent Systems</h2>
                    <p className='font-normal text-base text-[#677489]'>We design and train machine learning models that adapt, learn, and power smarter decisions from custom NLP tools to computer vision...</p>
                    <Link className='font-semibold text-[#00BDB2] flex items-center gap-1 ' href={'/'}>Learn More<SlArrowRight /></Link>
                </div>
                <div className='flex flex-col gap-5 bg-[#F5962033] p-12 md:p-16 lg:p-18  rounded-2xl'>
                    <Image src={CAPI} alt='Custom API Development'></Image>
                    <h2 className='font-normal text-2xl'>Custom API Development</h2>
                    <p className='font-normal text-base text-[#677489]'>Power Your Product with Seamless Integrations At WebClyde, we build secure, high-performance APIs that connect platforms, streamline operations, and unlock new...</p>
                    <Link className='font-semibold text-[#F59620] flex items-center gap-1' href={'/'}>Learn More<SlArrowRight /></Link>
                </div>
                <div className='flex flex-col gap-5 bg-[#3DBD4233] p-12 md:p-16 lg:p-18  rounded-2xl'>
                    <Image src={CWD} alt='Custom Web Development'></Image>
                    <h2 className='font-normal text-2xl'>Custom Web Development</h2>
                    <p className='font-normal text-base text-[#677489]'>Build Websites That Perform and Convert
                        At WebClyde, we design and develop custom websites tailored to your business goals...</p>
                    <Link className='font-semibold text-[#3DBD42] flex items-center gap-1' href={'/'}>Learn More<SlArrowRight /></Link>
                </div>
                <div className='flex flex-col gap-5 bg-[#644A9E33] p-12 md:p-16 lg:p-18  rounded-2xl'>
                    <Image src={CAD} alt='Custom App Development'></Image>
                    <h2 className='font-normal text-2xl'>AI Consulting & Implementation</h2>
                    <p className='font-normal text-base text-[#677489]'>Bring Your Ideas to Life with Tailored Apps WebClyde specializes in building custom web and mobile applications designed to meet...</p>
                    <Link className='font-semibold text-[#644A9E] flex items-center gap-1' href={'/'}>Learn More<SlArrowRight /></Link>
                </div>
                <div className='flex flex-col gap-5 bg-[#328DFF33] p-12 md:p-16 lg:p-18  rounded-2xl'>
                    <Image src={DI} alt='DevOps & Infrastructure'></Image>
                    <h2 className='font-normal text-2xl'>DevOps & Infrastructure</h2>
                    <p className='font-normal text-base text-[#677489]'>Optimize Your Infrastructure for Speed and Reliability.  We provide expert DevOps services to automate deployments, enhance scalability...</p>
                    <Link className='font-semibold text-[#328DFF] flex items-center gap-1' href={'/'}>Learn More<SlArrowRight /></Link>
                </div>
            </div>
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-[#3254ec] text-white mt-10">See All Services</button>
        </div>
    )
}

export default Services

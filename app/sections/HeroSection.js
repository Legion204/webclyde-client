import React from 'react'
import Image from 'next/image'
import rocket from '../../public/img/Group 1171278460.png'
import star from '../../public/img/Group 1171278459.png'
import carve_line from '../../public/img/Vector 335.png'
import ParticlesBackground from '../components/ParticlesBackground'

const HeroSection = () => {
    return (
        <section className=" bg-[url('/frame19.png')] bg-cover bg-center h-screen grid grid-cols-4 items-center justify-center">
            {/* <ParticlesBackground></ParticlesBackground> */}
            <Image className='self-end' src={rocket} alt='rocket'></Image>
            <div className="flex flex-col items-center text-center self-center col-span-2 relative">
                <Image className='absolute mt-30 invisible md:visible  ' src={carve_line} alt='rocket'></Image>
                <h1 className=" text-2xl md:text-8xl font-bold leading-none ">Building Modern <br /><span className='text-[#3254ec]'>Web Products</span><span className='relative'> That </span><br /> Perform</h1>
                <p className=" mt-4 mb-12 text-lg text-gray-400">From custom websites to SaaS platforms, we help brands launch fast, scalable, and user-friendly digital products.</p>
                <div className="flex flex-wrap justify-center">
                    <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-[#3254ec] text-white">Start Your Project</button>
                    <button className="px-8 py-3 m-2 text-lg border rounded text-black">View Our Work</button>
                </div>
            </div>
            <Image className='self-baseline' src={star} alt='star'></Image>
        </section>

    )
}

export default HeroSection

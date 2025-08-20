import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className=''>
            <section className="bg-linear-65 from-[#e4dcff] to-[#fff2e7]">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-36 xl:max-w-4xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Building Modern <br /> <span className='text-[#3254ec]'>Web Products</span>That Perform</h1>
                    <p className=" mt-4 mb-12 text-base text-gray-400">From custom websites to SaaS platforms, we help brands launch fast, scalable, and user-friendly digital products.</p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-[#3254ec] text-white">Start Your Project</button>
                        <button className="px-8 py-3 m-2 text-lg border rounded text-black">Learn More</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SlArrowRight } from 'react-icons/sl'
import image_1 from '../../public/img/image 297.png'
import image_2 from "../../public/img/image 299.png"
import Curve_line from "../../public/img/Vector 336.png"

const PortfolioSection = () => {

  return (
    <section className='container mx-auto bg-[#3254EC1A] py-32 pr-32 mt-36'>
      <div className='flex flex-col md:flex-row items-center justify-between pl-32'>
        <div className='flex flex-col justify-center items-baseline gap-4 text-center'>
          <h3 className='bg-white text-[#282D39] px-6 py-1 rounded-4xl'>Portfolio</h3>
          <h2 className='font-bold text-5xl text-center'>Customer Journeys</h2>
          <p className='text-[#677489]'>From Concept to Success: See Our Clients’ Pathways.</p>
        </div>
        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-[#3254ec] text-white">See All Works</button>
      </div>
      <div className='grid grid-cols-3 h-[730px] gap-6 mt-14'>
        <div className='relative'>
          <div className='space-y-4 mt-8 pl-32'>
            <h2 className='text-4xl font-bold'>E-commerce</h2>
            <p className='text-[#677489]'>E-commerce or &quot;electronic commerce&quot; is the trading of goods and services online. The internet allows individuals and businesses to buy and sell an increasing amount of physical goods, digital goods, and services electronically.</p>
            <Link className='font-semibold text-[#328DFF] flex items-center gap-1' href={'/'}>Learn More<SlArrowRight /></Link>
          </div>
          <Image className='absolute mt-[258px] mr-[200px] invisible lg:visible' src={Curve_line} alt='Curve_line'></Image>
        </div>
        <Image className='' src={image_1} alt='image_1'></Image>
        <Image className='self-end' src={image_2} alt='image_2'></Image>
      </div>
    </section>
  )
}

export default PortfolioSection

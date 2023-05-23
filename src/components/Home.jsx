import React from 'react'
import HeroBanner from '../assets/HomeBanner.png'
import Search from '../assets/search.svg'

const Home = () => {
    return (
        <>
            <div className="w-full h-screen relative">
                <div className="w-full h-full relative top-0 left-0">
                    <img src={HeroBanner} alt="" className='absolute -z-10 h-full w-full object-cover'/>
                    <div className="w-full md:10/12 lg:8/12 h-full px-12 xl:px-36 2xl:px-60 backdrop-blur-[2px] lg:backdrop-blur-0">
                        <div className="w-full lg:w-3/4 h-full flex flex-col items-start justify-start gap-5">
                            <h1 className='text-4xl sm:text-6xl font-bold mt-20 sm:mt-40 lg:mt-60 mb-12'>Find the perfect job for you</h1>
                            <p className='text-sm lg:text-lg'>Search your career opportunity through 12,800 jobs</p>
                            <div className="flex border rounded-md p-2 py-2 shadow-2xl bg-white">
                                <div className="flex divide-x">
                                    <input className='outline-none w-full md:w-60 px-3 h-10 rounded-md text-sm' type="text" placeholder='Search by job title, company' />
                                    <input className='outline-none hidden md:flex w-52 px-3 h-10 rounded-md text-sm' type="text" placeholder='Province, city, or region'/>
                                </div>
                                <img src={Search} alt="Search" className='border w-10 p-1.5 rounded-xl bg-[#0963C2] fill-white' />
                            </div>
                            <div className="text=[#111] font-semibold text-xl">Popular Searches</div>
                            <div className="flex gap-3 flex-wrap pr-16 sm:pr-0">
                                <span className='py-2 px-5 rounded-lg bg-[#CFE3F4] text-[#0969C3] font-semibold'>Designer</span>
                                <span className='py-2 px-5 rounded-lg bg-[#CFE3F4] text-[#0969C3] font-semibold'>Writer</span>
                                <span className='py-2 px-5 rounded-lg bg-[#CFE3F4] text-[#0969C3] font-semibold'>Team leader</span>
                                <span className='py-2 px-5 rounded-lg bg-[#CFE3F4] text-[#0969C3] font-semibold'>Senior</span>
                                <span className='py-2 px-5 rounded-lg bg-[#CFE3F4] text-[#0969C3] font-semibold'>Web designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
import React from 'react'
import CC1 from '../assets/CC1.png'
import CC2 from '../assets/CC2.png'
import CC3 from '../assets/CC3.png'
import CC4 from '../assets/CC4.png'
import CC5 from '../assets/CC5.png'

const CompanyConnection = () => {
    return (
        <>
            <div className="w-full relative">
                <div className="w-full h-full relative top-0 left-0">
                    <div className="w-full h-full pb-20 flex flex-col gap-7">
                        <div className="flex items-center justify-center px-20 text-center">
                            <h1 className='text-xl font-bold'>We've helped <span className='text-[#40B5E8]'>2000+</span> world's best companies</h1>
                        </div>
                        <div className="w-full h-full md:h-20 flex items-center justify-evenly flex-row flex-wrap md:flex-nowrap md:flex-row gap-5 md:gap-10 px-5 xl:px-36 2xl:px-96">
                            <img src={CC1} alt="" className='w-40 md:w-28 xl:w-40 sm:h-24 md:h-full object-contain' />
                            <img src={CC2} alt="" className='w-40 md:w-28 xl:w-40 sm:h-24 md:h-full object-contain' />
                            <img src={CC3} alt="" className='w-40 md:w-28 xl:w-40 sm:h-24 md:h-full object-contain' />
                            <img src={CC4} alt="" className='w-40 md:w-28 xl:w-40 sm:h-24 md:h-full object-contain' />
                            <img src={CC5} alt="" className='w-40 md:w-28 xl:w-40 sm:h-24 md:h-full object-contain' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyConnection
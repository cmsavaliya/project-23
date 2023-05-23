import React from 'react'
import Devices from '../assets/Devices.png'
import AStore from '../assets/AStore.png'
import GPlay from '../assets/GPlay.png'

const Apk = () => {
    return (
        <>
            <div className="w-full h-full md:h-[75vh] relative">
                <div className="w-full h-full relative px-12 xl:px-36 2xl:px-40">
                    <div className="w-full h-full lg:h-4/5 bg-[#002745] rounded-2xl flex flex-col md:flex-row items-center justify-end relative top-0 left-0 p-7 md:p-0 gap-10 md:gap-0">
                        <img src={Devices} alt="" className='order-2 md:order-none w-3/4 md:w-1/2 lg:w-1/2 h-full object-contain lg:absolute lg:left-0 lg:top-40' />
                        <div className="order-1 md:order-none w-full md:w-1/2 lg:w-7/12 pl-8 md:pl-10 pr-8 px-0 xl:pl-40 xl:pr-20 h-full flex flex-col items-start justify-center gap-5">
                            <h1 className='leading-snug text-white text-2xl xl:text-4xl 2xl:text-5xl font-bold'>Download <span className='text-[#40b5e8]'>Orbit Jobs</span> app and find your dream job</h1>
                            <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet similique nostrum eius sequi culpa. Placeat, labore eum sapiente ea incidunt nam inventore neque.</p>
                            <div className="flex gap-5 flex-wrap justify-center">
                                <img src={AStore} alt="" className='h-12' />
                                <img src={GPlay} alt="" className='h-12' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Apk
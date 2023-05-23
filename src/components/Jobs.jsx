import React, { useState } from 'react'
import JobsContainers from './JobsContainers'
import { jobs } from '../data'
import Close from '../assets/close.svg'
import Star from '../assets/star.svg'
import Briefcase from '../assets/Briefcase.svg'
import Location from '../assets/Location.svg'
import I1 from '../assets/I1.png'
import I2 from '../assets/I2.png'
import I3 from '../assets/I3.png'
import I4 from '../assets/I4.png'
import I5 from '../assets/I5.png'
import I6 from '../assets/I6.png'
import I7 from '../assets/I7.png'
import I8 from '../assets/I8.png'


const Jobs = () => {

    const [jobsPortion, setjobsPortion] = useState(0)
    const [jobData, setjobData] = useState(jobs[jobsPortion])
    const [open, setopen] = useState(false)

    const handleClick = num => {
        setjobsPortion(num)
        console.log(num)
        setjobData(jobs[num])
        console.log(jobData)
        setopen(true)
    }

    return (
        <>
            <div className="w-full relative bg-[#E6F0F9]">
                <div className="w-full h-full relative top-0 left-0">
                    <div className="h-full px-10 xl:px-32 2xl:px-40 py-20 flex flex-col gap-7">
                        <div className="flex items-center justify-between">
                            <h1 className='text-lg md:text-3xl font-bold'>Featured Job Offers</h1>
                        </div>
                        <div className="flex flex-wrap">
                            {jobs.map((data, index) => {
                                const i = data.imgSrc
                                let imgs = i === 'I1' ? I1 : i === 'I2' ? I2 : i === 'I3' ? I3 : i === 'I4' ? I4 : i === 'I5' ? I5 : i === 'I6' ? I6 : i === 'I7' ? I7 : I8
                                return (
                                    <JobsContainers data={data} img={imgs} key={index} index={index} handleClick={handleClick} />
                                )
                            })}
                        </div>
                        <div className="flex items-center justify-between">
                            <a href="/" className='flex items-center justify-center gap-3 text-white font-medium p-3 px-5 rounded-lg bg-[#0969C3] transition-all hover:bg-[#05417a]'>
                                <p>All Categories</p>
                                <span className='fill-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9.071" height="14.844" viewBox="0 0 9.071 14.844">
                                        <path id="Path_20177" data-name="Path 20177" d="M13.995,13.058,8.222,7.285,9.871,5.636l7.422,7.422L9.871,20.48,8.222,18.831Z" transform="translate(-8.222 -5.636)" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full z-[60]" style={{ display: open ? 'block' : 'none' }}>
                <div className="sticky top-0 left-0 w-full h-screen mx-auto bg-[#aaa5] flex items-center justify-center backdrop-blur-sm">
                    <div className="w-full md:w-2/3 xl:w-1/2 p-2 relative">
                        <div className="w-full p-4 rounded-xl bg-white border">
                            <div className="w-full h-full flex flex-col justify-between gap-3">
                                <div className="flex items-center justify-between h-12 overflow-hidden">
                                    <img src={jobData.imgSrc === 'I1' ? I1 : jobData.imgSrc === 'I2' ? I2 : jobData.imgSrc === 'I3' ? I3 : jobData.imgSrc === 'I4' ? I4 : jobData.imgSrc === 'I5' ? I5 : jobData.imgSrc === 'I6' ? I6 : jobData.imgSrc === 'I7' ? I7 : I8} alt="" className='w-12 h-12 mr-2 rounded-md' />
                                    <div className="w-full leading-5">
                                        <h1 className='leading-6 font-semibold'>{jobData.title}</h1>
                                    </div>
                                    <img src={Close} alt="" className='w-10 h-10 p-1.5' onClick={() => setopen(!open)}/>
                                </div>
                                <div className="flex flex-row items-center justify-between">
                                    <p className='w-full 2xl:w-1/2 text-left text-sm font-medium truncate'>{jobData.company}</p>
                                    <p className='w-full 2xl:w-8/12 flex items-center justify-end text-[#999999]'>
                                        <img src={Star} alt="" className='pr-1 h-5' />
                                        {jobData.review} | 50+ reviews
                                    </p>
                                </div>
                                <div className="flex flex-row 2xl:flex-row items-center justify-center 2xl:justify-between">
                                    <div className='w-1/2 lg:w-full 2xl:w-1/2 text-sm font-medium flex gap-4 gap-y-1 flex-wrap justify-start'>
                                        <span className='flex text-[#666666] items-center'>
                                            <img src={Briefcase} alt="Job Type" className='h-5 pr-1' />
                                            <p>{jobData.type}</p>
                                        </span>
                                        <span className='flex text-[#666666] items-center'>
                                            <img src={Location} alt="Location" className='h-5 pr-1' />
                                            <p>{jobData.location}</p>
                                        </span>
                                    </div>
                                    <p className='w-1/2 lg:w-full 2xl:w-8/12 flex items-center justify-end text-[#999999]'>
                                        {jobData.time} hours ago</p>
                                </div>
                                <div className="flex flex-col justify-between gap-3 divide-y">
                                    <div className="flex flex-col items-start justify-between">
                                        <ul className='list-outside pl-5 text-[#999999]'>
                                            {(jobData.specialitice).map((val, index) => {
                                                return (
                                                    <li key={index} className='list-disc text-sm'>{val}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="flex items-start justify-between pt-2">
                                        <ul className='list-outside flex flex-wrap'>
                                            {(jobData.skills).map((val, index) => {
                                                return (
                                                    <li key={index} className='text-sm after:content-["•"] after:px-1.5 after:text-lg last:after:content-[""]'>{val}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <a href="/" className='w-full flex items-center justify-center gap-3 text-white font-medium p-3 px-5 rounded-lg bg-[#0969C3] transition-all hover:bg-[#05417a]'>
                                            <p>All Categories</p>
                                            <span className='fill-white'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="9.071" height="14.844" viewBox="0 0 9.071 14.844">
                                                    <path id="Path_20177" data-name="Path 20177" d="M13.995,13.058,8.222,7.285,9.871,5.636l7.422,7.422L9.871,20.48,8.222,18.831Z" transform="translate(-8.222 -5.636)" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Jobs
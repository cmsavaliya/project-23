import React from 'react'
import Star from '../assets/star.svg'

const CompanyComponents = ({ data, img }) => {
    return (
        <>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 group">
                <div className="w-full p-4 rounded-xl bg-white flex flex-col justify-between gap-3 border transition-all ease-linear hover:shadow-xl hover:border-[#0969C3]">
                    <div className="flex items-center justify-between">
                        <img src={img} alt="" className='w-12 h-12 mr-5 rounded-sm' />
                        <div className="w-full flex flex-col justify-center">
                            <h1 className='font-semibold mb-0.5'>{data.title}</h1>
                            <div className="flex items-center">
                                <p className='text-sm font-medium'>{data.company}</p>
                                <p className='flex items-center justify-center text-[#666666]'>
                                    <img src={Star} alt="" className='pr-1 h-5' />
                                    {data.review} reviews</p>
                            </div>
                        </div>
                        <span className='fill-[#888] pr-1 transition-all -translate-x-2 group-hover:translate-x-1 group-hover:fill-blue-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9.071" height="14.844" viewBox="0 0 9.071 14.844">
                                <path id="Path_20177" data-name="Path 20177" d="M13.995,13.058,8.222,7.285,9.871,5.636l7.422,7.422L9.871,20.48,8.222,18.831Z" transform="translate(-8.222 -5.636)" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyComponents
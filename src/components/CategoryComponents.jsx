import React from 'react'

const CategoryComponents = ({ data, img }) => {
    return (
        <>
            <div className="w-full sm:w-1/2 xl:w-1/4 p-1">
                <div className="w-full flex items-center border p-4 xl:p-4 rounded-xl hover:border-[#0969C3]">
                    <img src={img} alt="" className='w-8 h-8 md:w-12 md:h-12 mr-5 xl:mr-3 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9'/>
                    <div className="">
                        <h1 className='text-xs md:text-base font-medium'>{data.title}</h1>
                        <p className='text-xs md:text-base font-light md:font-normal'>{data.openings} openings</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryComponents
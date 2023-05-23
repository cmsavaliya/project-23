import React from 'react'
import CategoryComponents from './CategoryComponents'
import { category } from '../data'
import Grow from '../assets/grow.svg'
import Design from '../assets/design.svg'
import Web from '../assets/web.svg'
import Write from '../assets/write.svg'

const Category = () => {
    return (
        <>
            <div className="w-full relative">
                <div className="w-full h-full relative top-0 left-0">
                    <div className="h-full px-12 xl:px-32 2xl:px-40 py-20 flex flex-col gap-7">
                        <div className="flex items-center justify-between">
                            <h1 className='text-lg md:text-3xl font-bold'>Search by Category</h1>
                            <a href="/" className='flex items-center justify-center gap-3 text-[#0969C3] font-medium'>
                                <p>All Categories</p>
                                <span className='fill-[#0969C3]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9.071" height="14.844" viewBox="0 0 9.071 14.844">
                                        <path id="Path_20177" data-name="Path 20177" d="M13.995,13.058,8.222,7.285,9.871,5.636l7.422,7.422L9.871,20.48,8.222,18.831Z" transform="translate(-8.222 -5.636)" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="flex flex-wrap">
                            {category.map((data, index) => {
                                let imgSrc = data.imgSrc === 'Grow' ? Grow : data.imgSrc === 'Design' ? Design : data.imgSrc === 'Web' ? Web :  Write 
                                return (
                                    <CategoryComponents data={data} img={imgSrc} key={index} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
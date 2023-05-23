import React from 'react'
import CompanyComponents from './CompanyComponents'
import IMG from '../assets/I1.png'
import { CompanyData } from '../data'
import C1 from '../assets/I1.png'
import C2 from '../assets/I2.png'
import C3 from '../assets/I3.png'
import C4 from '../assets/I4.png'
import C5 from '../assets/I5.png'
import C6 from '../assets/I6.png'
import C7 from '../assets/I7.png'
import C8 from '../assets/I8.png'
import C9 from '../assets/I1.png'
import C10 from '../assets/I3.png'
import C11 from '../assets/I5.png'
import C12 from '../assets/I7.png'

const Company = () => {
    return (
        <>
            <div className="w-full relative">
                <div className="w-full h-full relative top-0 left-0">
                    <div className="h-full px-12 xl:px-32 2xl:px-40 py-20 flex flex-col gap-7">
                        <div className="flex items-center justify-between">
                            <h1 className='text-lg md:text-3xl font-bold'>Find Best Companies</h1>
                        </div>
                        <div className="flex flex-wrap">
                            {CompanyData.map((data, index) => {
                                const i = data.imgSrc
                                let img = i === 'C1' ? C1 : i === 'C2' ? C2 : i === 'C3' ? C3 : i === 'C4' ? C4 : i === 'C5' ? C5 : i === 'C6' ? C6 : i === 'C7' ? C7 : i === 'C8' ? C8 : i === 'C9' ? C9 : i === 'C10' ? C10 : i === 'C11' ? C11 : i === 'C12' ? C12 : IMG
                                return (
                                    <CompanyComponents data={data} img={img} key={index} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Company
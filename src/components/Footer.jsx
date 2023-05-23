import React from 'react'
import email from '../assets/email.svg'
import whatsapp from '../assets/whatsapp.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
        <>
            <div className="w-full relative">
                <div className="w-full h-full relative top-0 left-0 divide-y px-10 xl:px-32 2xl:px-40">
                    <div className="h-full pt-20 pb-10 flex gap-y-7 lg:gap-0 text-[#666] flex-wrap">
                        <div className="flex flex-col w-1/2 lg:w-1/4 px-0 md:px-5 gap-5">
                            <img src={Logo} alt="logo" className='h-10 w-fit' />
                            <p className='flex items-center gap-2.5'>
                                Follow us on
                                <span className='flex gap-2.5'>
                                    <img src={instagram} alt="" />
                                    <img src={linkedin} alt="" />
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col w-1/2 lg:w-1/4 px-0 md:px-5">
                            <p>Connect with us</p>
                            <p className='flex items-center gap-1'><span><img src={email} alt="" /></span>info@orbitjobs.id</p>
                            <p className='flex items-center gap-1'><span><img src={whatsapp} alt="" /></span>+62 811-1921-8222</p>
                        </div>
                        <div className="flex flex-col w-1/2 lg:w-1/4 px-0 md:px-5">
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                            <p>About us</p>
                            <p>FAQ</p>
                        </div>
                        <div className="flex flex-col w-1/2 lg:w-1/4 px-0 md:px-5">
                            <p>Blogs</p>
                            <p>For Jobseekers</p>
                            <p>For Employers</p>
                        </div>
                    </div>

                    <div className="h-full text-[#666] text-center py-7">
                        © 2022 <span className='text-[#40b5e8]'>Orbit Jobs</span> All rights reserved.
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Notification from '../assets/Notification.svg'
import Profile from '../assets/Profile.svg'
import DownArrow from '../assets/DownArrow.svg'
import World from '../assets/World.svg'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'

const Header = () => {
    const [menubar, setmenubar] = useState(false)

    const [onHover, setonHover] = useState(false)

    return (
        <>
            <div className="fixed left-0 h-screen w-full bg-white px-5" style={{ top: menubar ? '0px' : '-120vh', zIndex: menubar ? '999' : '0' }}>
                <div className="w-full h-full top-0 left-0">
                    <div className="h-20 w-full flex justify-between">
                        <div className="logo w-full h-full flex justify-between">
                            <div className=" h-full p-4">
                                <img src={Logo} alt="Orbit Jobs" className='h-full object-contain' />
                            </div>
                            <div className="menubar h-full flex items-center justify-end divide-x divide-black font-semibold">
                                <img src={Close} alt="" className='h-1/2' onClick={() => setmenubar(!menubar)} />
                            </div>
                        </div>
                    </div>
                    <div className="menubar w-full h-full flex flex-col items-center justify-start divide-black font-semibold py-20">
                        <div className="top-0 flex flex-col gap-3 sm:gap-2 lg:gap-4 px-5">
                            <a href="/" className='py-2 px-5 rounded-lg bg-[#CFE3F4] font-semibold text-blue-600'>Home</a>
                            <a href="/" className='py-2 px-5 rounded-lg bg-[#CFE3F4] font-semibold text-neutral-900'>My jobs</a>
                            <a href="/" className='py-2 px-5 rounded-lg bg-[#CFE3F4] font-semibold text-neutral-900'>Notifications</a>
                            <a href="/" className='py-2 px-5 rounded-lg bg-[#CFE3F4] font-semibold text-neutral-900'>Profile</a>
                            <a href="/" className='py-2 px-5 rounded-lg bg-[#CFE3F4] font-semibold text-neutral-900'>Change Password</a>
                            <a href="/" className='py-2 px-5 rounded-lg bg-[#CFE3F4] font-semibold text-red-500'>Sign Out</a>
                            <div className="flex flex-col items-center justify-center absolute top-10 -right-14 bg-white p-3 rounded-md gap-2 h-28 text-[#999]"
                                style={{ display: onHover ? 'flex' : 'none' }}>
                                <p className='w-full'>Profile</p>
                                <p className='w-full'>Change Password</p>
                                <p className='w-full text-red-500'>Sign out</p>
                            </div>
                            <div className="flex justify-center gap-3 p-1.5 rounded-md border">
                                <img src={World} alt='' />
                                <span>EN</span>
                                <img src={DownArrow} alt="" />
                            </div>
                            <a href="/" className='flex items-center justify-start gap-3 group py-2 px-5 rounded-lg font-semibold border'>
                                <p className='group-hover:text-[#0969C3]'>For Employee</p>
                                <span className='transition-all ease-linear translate-x-0 group-hover:fill-[#0969c3] group-hover:translate-x-2 pr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9.071" height="14.844" viewBox="0 0 9.071 14.844">
                                        <path id="Path_20177" data-name="Path 20177" d="M13.995,13.058,8.222,7.285,9.871,5.636l7.422,7.422L9.871,20.48,8.222,18.831Z" transform="translate(-8.222 -5.636)" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header w-full h-20 relative bg-[#e6f0f9]">
                <div className="logo w-full h-full flex justify-between px-5 sm:px-20 xl:px-36 2xl:px-60">
                    <div className=" h-full p-4">
                        <img src={Logo} alt="Orbit Jobs" className='h-full object-contain' />
                    </div>

                    {/* Display none after small size */}
                    <div className="menubar h-full hidden md:flex items-center justify-end divide-x divide-black font-semibold">
                        <div className="flex gap-2 lg:gap-4 px-5 relative">
                            <a className='text-blue-600' href="/">Home</a>
                            <a className='' href="/">My jobs</a>
                            <img className='' src={Notification} alt="Notification" />
                            <img className='' src={Profile} alt="Profile" onClick={() => setonHover(!onHover)} />
                            <div className="flex flex-col items-center justify-center absolute top-10 -right-14 bg-white p-3 rounded-md gap-2 h-28 text-[#999]"
                                style={{ display: onHover ? 'flex' : 'none' }}>
                                <p className='w-full'>Profile</p>
                                <p className='w-full'>Change Password</p>
                                <p className='w-full text-red-500'>Sign out</p>
                            </div>
                        </div>
                        <div className="flex gap-2 lg:gap-4 px-5">
                            <a href="/" className='flex items-center justify-center gap-3 group'>
                                <p className='group-hover:text-[#0969C3]'>For Employee</p>
                                <span className='transition-all ease-linear translate-x-0 group-hover:fill-[#0969c3] group-hover:translate-x-2 pr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9.071" height="14.844" viewBox="0 0 9.071 14.844">
                                        <path id="Path_20177" data-name="Path 20177" d="M13.995,13.058,8.222,7.285,9.871,5.636l7.422,7.422L9.871,20.48,8.222,18.831Z" transform="translate(-8.222 -5.636)" />
                                    </svg>
                                </span>
                            </a>
                            <div className="flex gap-3 border p-1.5 rounded-md">
                                <img src={World} alt='' />
                                <span>EN</span>
                                <img src={DownArrow} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* display block after none size */}
                    <div className="menubar h-full flex md:hidden items-center justify-center divide-x divide-black font-semibold">
                        <img src={Menu} alt="" className='h-2/3' onClick={() => setmenubar(!menubar)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
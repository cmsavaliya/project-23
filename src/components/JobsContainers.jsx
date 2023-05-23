import Bookmark from '../assets/Bookmark.svg'
import Star from '../assets/star.svg'
import Briefcase from '../assets/Briefcase.svg'
import Location from '../assets/Location.svg'

const JobsContainers = ({ data, img, index, handleClick }) => {

    return (
        <>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 relative" onClick={() => handleClick(index)}>
                <div className="w-full p-4 rounded-xl bg-white">
                    <div className="w-full h-full flex flex-col justify-between gap-3">
                        <div className="flex items-start justify-between h-12 overflow-hidden">
                            <img src={img} alt="" className='w-12 h-12 mr-2 rounded-md' />
                            <div className="w-full leading-5">
                                <h1 className='leading-6 font-semibold'>{data.title}</h1>
                            </div>
                            <img src={Bookmark} alt="" className='w-10 h-10 p-1.5' />
                        </div>
                        <div className="flex flex-col 2xl:flex-row items-center justify-between">
                            <p className='w-full text-center 2xl:w-4/12 2xl:text-left text-sm font-medium truncate'>{data.company}</p>
                            <p className='w-full 2xl:w-8/12 flex items-center justify-center text-[#999999]'>
                                <img src={Star} alt="" className='pr-1 h-5' />
                                {data.review} | 50+ reviews
                            </p>
                        </div>
                        <div className="flex flex-row lg:flex-col 2xl:flex-row items-center justify-center 2xl:justify-between">
                            <div className='w-1/2 lg:w-full 2xl:w-4/12 text-sm font-medium flex gap-4 gap-y-1 flex-wrap justify-center 2xl:justify-between'>
                                <span className='flex text-[#666666] items-center'>
                                    <img src={Briefcase} alt="Job Type" className='h-5 pr-1' />
                                    <p>{data.type}</p>
                                </span>
                                <span className='flex text-[#666666] items-center'>
                                    <img src={Location} alt="Location" className='h-5 pr-1' />
                                    <p>{data.location}</p>
                                </span>
                            </div>
                            <p className='w-1/2 lg:w-full 2xl:w-8/12 flex items-center justify-center text-[#999999]'>
                                {data.time} hours ago</p>
                        </div>
                        <div className="flex flex-col justify-between gap-3 divide-y">
                            <div className="flex flex-col items-start justify-between">
                                <ul className='list-outside pl-5 text-[#999999]'>
                                    {(data.specialitice).map((val, index) => {
                                        return (
                                            index < 3 ? <li key={index} className='list-disc text-sm'>{val}</li> : null
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobsContainers
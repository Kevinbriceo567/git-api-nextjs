'use client';

import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { TbListDetails } from 'react-icons/tb';
import { BiRename } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';

import response_data from '../../interfaces/github_api';

interface CommitDetailsProps {
    data: response_data
}

const CommitDetails: React.FC<CommitDetailsProps> = ({ data }) => {

    const dateToLocalString = (originDate: string): string => {
        return new Date(originDate).toLocaleDateString('es-CL') + " " + new Date(originDate).toLocaleTimeString('es-CL');
    }

    return (
        <div className="flex flex-col border rounded-lg overflow-hidden bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-4">
                <div className="flex flex-col sm:border-l col-span-3">
                    <div className="flex flex-col space-y-4  p-6 text-gray-600">
                        <p className="text-2xl font-bold text-[#117caf] rounded-full">
                            {data.commit.message}
                        </p>
                        <div className="flex flex-row text-sm">
                            <span className="mr-3">
                                <img className='max-w-[8%] shadow-md border-2 border-[#117caf] rounded-full' src={data.author.avatar_url} />
                            </span>
                        </div>

                        <div className="flex flex-row text-sm">
                            <span className="mr-3">
                                <BiRename />
                            </span>
                            <p className="flex items-center  text-gray-500">
                                <span className="font-semibold mr-2 text-xs uppercase">Name:</span>
                                <span>{data.commit.author.name}</span>
                            </p>
                        </div>

                        <div className="flex flex-row text-sm">
                            <span className="mr-3">
                                <MdDateRange />
                            </span>
                            <p className="flex items-center  text-gray-500">
                                <span className="font-semibold mr-2 text-xs uppercase">Date:</span>
                                <span>{dateToLocalString(data.commit.author.date)}</span>
                            </p>
                        </div>
                        <div className="flex flex-row text-sm">
                            <span className="mr-3">
                                <HiOutlineMailOpen /> </span>
                            <p className="flex items-center  text-gray-500">
                                <span className="font-semibold mr-2 text-xs uppercase">Email:</span>
                                <span>{data.commit.author.email}</span>
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col w-full relative bottom-0">
                        <div className="grid grid-cols-2 border-t divide-x text-[#117caf]  bg-gray-50 dark:bg-transparent py-3">
                            <a href={data.html_url} target='_blank'
                                className="cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                                <div className="mr-2" >
                                    <TbListDetails />
                                </div>
                                View Details
                            </a>
                            <a href={data.author.html_url} target='_blank'
                                className="cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                                <div className="mr-2" >
                                    <FaUserCircle />
                                </div>
                                View User
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommitDetails;
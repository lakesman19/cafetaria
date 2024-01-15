import CustomButton from '@/components/CustomButton'
import Map from '@/components/Map'
import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
const TimeandLocation = () => {
    return (
        <div className=''>
            <div className="flex w-full flex-col gap-y-2">
                <Map />
                <label htmlFor="" className='font-bold'>Business location</label>
                <div className="bg-[#83838326] flex items-center gap-x-2 py-1 px-1 text-sm w-[80%] sm:w-[70%] md:w-[70%] rounded-xl">
                    <span><HiOutlineLocationMarker /></span>
                    <input type="text" placeholder='Enter manually' className='bg-[transparent] outline-none border-none w-[100%]' />
                </div>
            </div>
            <div className="w-full md:w-[60%] flex flex-col gap-y-4">
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>Monday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>Tuesday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>wednesday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>Thursday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>Friday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                       <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>Saturday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
                      <div className="flex flex-col md:flex-row w-full gap-x-6">
                    <h4 className='text-sm font-bold w-[30%]'>Sunday</h4>
                    <div className="flex gap-x-6 w-[70%]">
                        <div className="flex flex-col gap-y-3 ">
                            <p className='text-sm font-semibold'>open</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none text-sm' />

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className='text-sm font-semibold'>close</p>
                            <div className="bg-[#F5F5F5] h-8 px-1 rounded-xl">
                                <input type="time" name="" id="" step='1800' className='bg-[transparent]  h-full border-0 outline-none' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeandLocation
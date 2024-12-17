import React from 'react'
import { BiBell } from 'react-icons/bi'
import { IoMdArrowDropdown } from "react-icons/io";
import { TiFilter } from "react-icons/ti";
import { MdCalendarMonth } from "react-icons/md";
import { MdOutlineFace5 } from "react-icons/md";

import { IoMdAdd } from "react-icons/io";
import { BsBox } from "react-icons/bs";

const DashBoard = () => {
  return (
    <div className='min-h-[100vh] w-[100%]' >
        <div className='h-[4.8rem] w-full  flex justify-between  items-center bg-white'>
            <div className='ml-5 text-2xl font-semibold'>
            <h1>Dashboard</h1>
            </div>
            <div className='flex  justify-around w-[56%] align-middle items-center text-sm'>
                <div className='h-11 w-20 rounded-3xl border border-slate-200 flex items-center justify-around p-1'>
                    <div className='h-5 w-5 rounded-full  bg-violet-300 flex items-center justify-center text-purple-700'>$</div>
                    <IoMdArrowDropdown className='h-10 w-5' />
                </div>


                <div className='flex'>
                <div className='h-11 w-36 rounded-l-xl border border-slate-200 flex items-center justify-around p-1 '>
                    <TiFilter className='h-10 w-6 fill-[#4a5084]' />
                    <span>Filters</span>
                    <IoMdArrowDropdown className='h-10 w-5' />
                </div>
                <div className='h-11 w-36 border border-slate-200 flex items-center justify-around p-1'>
                  <MdCalendarMonth className='h-7 w-5 fill-[#4a5084]' />
                    <span>Dated range</span>
                    <IoMdArrowDropdown className='h-10 w-5' />
                </div>
                <div className='h-11 w-36 rounded-r-xl border border-slate-200 flex items-center justify-around p-1'>
                <MdOutlineFace5 className='h-8 w-5 fill-[#1f2449]' />
                    <h5>All Accounts</h5>
                    <IoMdArrowDropdown className='h-10 w-5' />
                </div>
                </div>


                <div className='h-11 w-11 flex items-center justify-center border border-slate-200  rounded-full'>
                    <BiBell className='h-6 w-6 text-slate-500'/>
                </div>

                </div>

            </div>

            <div className='h-16 w-full  flex items-center p-5 justify-between '>
                <div className='flex justify-center items-center gap-2'><p className='text-gray-500 font-semibold'>Last import:</p><span className='text-sm text-gray-500 '>Jun 09,2024 07:00 PM</span></div>
                <div className='flex gap-3 mt-1'>
                    <button style={{background:'rgb(100, 87, 166)'}} className='w-36 h-10  flex gap-2 items-center  p-3 text-white rounded-lg '><IoMdAdd />Import trades</button>
                    <button style={{color:'rgb(100, 87, 166)'}} className='bg-white w-10 h-19 flex items-center justify-center border border-slate-300 rounded-lg'><BsBox/></button>
                </div>
            </div>

            <div className='h-36 w-full grid grid-cols-5 grid-flow-row  gap-3 pl-4 pr-4'>
                <div className='bg-white m-2 rounded-xl p-3'>
                    <div className='flex items-center gap-2'>
                    <h3 className='text-gray-500'>Net P&L</h3>
                    <div className='h-4 w-4 flex justify-center items-center border-[1px] border-gray-800 rounded-full text-[10px]'>i</div>
                    <div className='bg-violet-200 w-6 h-4 text-[11px] rounded-xl flex justify-center '>18</div>
                    </div>
                    <div className='flex'>
                        <h1 className='h-16 flex items-center text-red-400 text-[21px] font-bold '>-$20,523.42</h1>
                        <div className=' flex items-end w-12 justify-end'><span>ss</span></div>
                    </div>
                </div>
                <div className='bg-white m-2 rounded-xl p-3 flex items-center'>

                    <div className='w-[60%] bg-cyan-600'>
                     <div className='flex items-center gap-2'>
                        <h3 className='text-gray-500 text-md bg-red-300'>Trade Win %</h3>
                       <div className='h-4 w-4 flex justify-center items-center bg-fuchsia-500
                        border-[1px] border-gray-800  rounded-full text-[10px]'>i</div>
                       </div>
                        <h1 className='bg-amber-400 h-16 flex items-center text-black text-[21px] font-bold '>16.67%</h1>
                    </div>
            
                      <div className='flex h-[85%] w-[40%] bg-amber-700'>
                        <div className='bg-yellow w-[80%] '></div>
                         </div>
                </div>

                
                <div className='bg-white m-2 rounded-xl p-3'>
                <div className='flex items-center gap-2'>
                    <h3 className='text-gray-500'>Net P&L</h3>
                    <div className='h-4 w-4 flex justify-center items-center border-[1px] border-gray-800 rounded-full text-[10px]'>i</div>
                    <div className='bg-violet-200 w-6 h-4 text-[11px] rounded-xl flex justify-center '>18</div>
                    </div>
                    <div className='flex'>
                        <h1 className='h-16 flex items-center text-red-400 text-[21px] font-bold '>-$20,523.42</h1>
                        <div className=' flex items-end w-12 justify-end'><span>ss</span></div>
                    </div>
                </div>
                <div className='bg-white m-2 rounded-xl p-3'>
                <div className='flex items-center gap-2'>
                    <h3 className='text-gray-500'>Net P&L</h3>
                    <div className='h-4 w-4 flex justify-center items-center border-[1px] border-gray-800 rounded-full text-[10px]'>i</div>
                    <div className='bg-violet-200 w-6 h-4 text-[11px] rounded-xl flex justify-center '>18</div>
                    </div>
                    <div className='flex'>
                        <h1 className='h-16 flex items-center text-red-400 text-[21px] font-bold '>-$20,523.42</h1>
                        <div className=' flex items-end w-12 justify-end'><span>ss</span></div>
                    </div>
                </div>
                <div className='bg-white m-2 rounded-xl p-3'>
                <div className='flex items-center gap-2'>
                    <h3 className='text-gray-500'>Net P&L</h3>
                    <div className='h-4 w-4 flex justify-center items-center border-[1px] border-gray-800 rounded-full text-[10px]'>i</div>
                    <div className='bg-violet-200 w-6 h-4 text-[11px] rounded-xl flex justify-center '>18</div>
                    </div>
                    <div className='flex'>
                        <h1 className='h-16 flex items-center text-red-400 text-[21px] font-bold '>-$20,523.42</h1>
                        <div className=' flex items-end w-12 justify-end'><span>ss</span></div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DashBoard
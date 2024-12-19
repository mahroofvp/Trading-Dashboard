import React from 'react'
import SideBarItems from './SideBarItems'
import Logo from "../assets/logo.png"

import { IoMdAdd } from "react-icons/io";
import { BiSolidDashboard } from "react-icons/bi";
import { RiEditBoxFill } from "react-icons/ri";
import { TbChartCandleFilled } from "react-icons/tb";
import { AiFillBook } from "react-icons/ai";
import { GiChessKnight } from "react-icons/gi";
import { HiChartSquareBar } from "react-icons/hi";
import { IoFlashSharp } from "react-icons/io5";


const SideBarDetails = [
 
    {
        id:1,
        icon:<BiSolidDashboard/>,
        title:"Dashboard",

    },
    {
        id:2,
        icon:<RiEditBoxFill />,
        title:"Daily Journal",

    },
    {
        id:3,
        icon:<TbChartCandleFilled />,
        title:"Trades",

    },
    {
        id:4,
        icon:<AiFillBook />,
        title:"NoteBook",

    },
    {
        id:5,
        icon:<GiChessKnight />,
        title:"Playbook",

    },
    {
        id:6,
        icon:<HiChartSquareBar />,
        title:"Reports",

    },
    {
        id:7,
        icon:<IoFlashSharp />,
        title:"Insights",

    }
]


const SideBar = () => {
  return (
   <>
   <div id='sidebar-container' className=" min-h-[100vh] w-[15.8%] text-white flex flex-col">
    <div className='ml-5 h-10 font-bold text-center flex items-center'>
     <img src={Logo} alt="" className='h-10 mt-5 ml' />
    </div>
    <div className='flex p-1 rounded-md w-[85%] items-center ml-5 mt-10 bg-indigo-600 mb-3'>
    <span className='mr-3 items-center'><IoMdAdd /></span>
        <h3>Add Trade</h3>
    </div>

  <div className='flex flex-col  min-h-screen justify-items-center '>

    <div className='ml-5'>
 {SideBarDetails.map((item)=>(
   <div key={item.id} className="active:bg-slate-500 hover:bg-slate-500 cursor-pointer rounded-md font-medium text-slate-200">
    <SideBarItems  key={item.id} title={item.title} icon={item.icon} />
  </div>
 )
)}
</div>

  <div className='flex items-center bg-slate-500 rounded-md p-1 w-[90%] ml-3 mt-[60%]'>
    <div className='rounded-full bg-slate-800 h-7 w-7 flex justify-center items-center mr-3 ml-3'>A</div>
    <div>
    <h4 >Ashkar VP</h4>
    <span className=' font-extralight'>ashkarali141@gmail.com</span>
    </div>
  </div>

 </div>

</div>
   </>
  )
}

export default SideBar
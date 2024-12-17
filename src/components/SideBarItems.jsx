import React from 'react'

const SideBarItems = ({title, icon}) => {
  return (
    <div className='flex p-2 items-center '>
    <span className='mr-3 items-center'>{icon}</span>
        <h3>{title}</h3>
    </div>
  )
}

export default SideBarItems
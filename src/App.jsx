import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import DashBoard from './pages/DashBoard'
function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
    <div className='flex'>
    <SideBar/>
    <DashBoard/>
    </div>

    </>
  )
}

export default App

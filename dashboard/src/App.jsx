import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'

function App() {

  let [activeMenu, setActiveMenu] = useState('navbar')


  let handleActive = (menu) => {
    //console.log(menu)
    setActiveMenu(menu)
  }

  return (


    <>

      <div className='flex gap-x-4'>
        {/* 100% = relative to parent’s height.
        100vh = relative to the browser viewport. */}
        <div className='w-[15%] h-[100vh] bg-red-400 overflow-y-auto '>

          <ul className='cursor-pointer'>
            <li className='px-4' onClick={() => handleActive("navbar")}>Navbar</li>
            <li onClick={() => handleActive("banner")}>Banner</li>
            <li onClick={() => handleActive("about")} >About</li>
            <li onClick={() => handleActive("service")} >Service</li>
            <li onClick={() => handleActive("resume")} >Resume</li>
            <li onClick={() => handleActive("portfolio")} >Portfolio</li>
            <li onClick={() => handleActive("testimonial")} > Testimonial </li>
            {/* Testimonial---->Client Feedback */}
            <li onClick={() => handleActive("partner")} > partner </li>
            <li onClick={() => handleActive("blog")} > Blog </li>
            <li onClick={() => handleActive("contact")} > Contact </li>
            <li onClick={() => handleActive("footer")} > Footer </li>

          </ul>

        </div>

        {/* bg-green-300 */}
        <div className='w-[85%] h-[100vh]  overflow-y-auto'>

          {activeMenu == "navbar" && <Navbar />}
          {activeMenu == "banner" && <h1> Banner part </h1>}
          {activeMenu == "about" && <h1> About part </h1>}
          {activeMenu == "service" && <h1> Service part </h1>}
          {activeMenu == "resume" && <h1> Resume part </h1>}
          {activeMenu == "portfolio" && <h1> Portfolio part </h1>}
          {activeMenu == "testimonial" && <h1> Testimonial part </h1>}
          {activeMenu == "partner" && <h1> Partner part </h1>}
          {activeMenu == "blog" && <h1> Blog part </h1>}
          {activeMenu == "contact" && <h1> Contact part </h1>}


        </div>

      </div>


    </>
  )
}

export default App

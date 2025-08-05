import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminLayout from './Layout/AdminLayout';
import NavbarPage from './Pages/NavbarPage';
import HomePage from './Pages/HomePage';
import BannerPage from './Pages/BannerPage';

const App = () => {

  const appRouter = createBrowserRouter([

    {
      path: '/',
      element: <HomePage />
    },

    // other public and admin routes...

    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        { path: 'navbar', element: <NavbarPage /> },
        { path: 'banner', element: <BannerPage /> },
        // { path: 'about', element: <AboutPage /> },
        // { path: 'service', element: <ServicePage /> },
        // { path: 'resume', element: <ResumePage /> },
        // { path: 'portfolio', element: <PortfolioPage /> },
        // { path: 'testimonial', element: <TestimonialPage /> },
        // { path: 'partner', element: <PartnerPage /> },
        // { path: 'blog', element: <BlogPage /> },
        // { path: 'contact', element: <ContactPage /> },
        // { path: 'footer', element: <FooterPage /> },
      ]
    }
  ]);


  return (

    <>
      <RouterProvider router={appRouter} />

    </>


  );
};

export default App;




// import { useState } from 'react'

// import './App.css'
// import NavbarPage from './Pages/NavbarPage'

// function App() {

//   let [activeMenu, setActiveMenu] = useState('navbar')


//   let handleActive = (menu) => {
//     //console.log(menu)
//     setActiveMenu(menu)
//   }

//   return (


//     <>

//       <div className='flex gap-x-4'>
//         {/* 100% = relative to parent’s height.
//         100vh = relative to the browser viewport. */}
//         <div className='w-[15%] min-h-screen  bg-red-400 '>
//           {/* h-[100vh] overflow-y-auto  ---> not used this class */}
//           <ul className='cursor-pointer'>
//             <li  onClick={() => handleActive("navbar")}>Navbar</li>
//             <li onClick={() => handleActive("banner")}>Banner</li>
//             <li onClick={() => handleActive("about")} >About</li>
//             <li onClick={() => handleActive("service")} >Service</li>
//             <li onClick={() => handleActive("resume")} >Resume</li>
//             <li onClick={() => handleActive("portfolio")} >Portfolio</li>
//             <li onClick={() => handleActive("testimonial")} > Testimonial </li>
//             {/* Testimonial---->Client Feedback */}
//             <li onClick={() => handleActive("partner")} > partner </li>
//             <li onClick={() => handleActive("blog")} > Blog </li>
//             <li onClick={() => handleActive("contact")} > Contact </li>
//             <li onClick={() => handleActive("footer")} > Footer </li>

//           </ul>

//         </div>

//         {/* bg-green-300 */}
//         <div className='w-[85%] min-h-screen'>
//           {/* h-[100vh]  overflow-y-auto */}
//           {activeMenu == "navbar" && <NavbarPage />}
//           {activeMenu == "banner" && <h1> Banner part </h1>}
//           {activeMenu == "about" && <h1> About part </h1>}
//           {activeMenu == "service" && <h1> Service part </h1>}
//           {activeMenu == "resume" && <h1> Resume part </h1>}
//           {activeMenu == "portfolio" && <h1> Portfolio part </h1>}
//           {activeMenu == "testimonial" && <h1> Testimonial part </h1>}
//           {activeMenu == "partner" && <h1> Partner part </h1>}
//           {activeMenu == "blog" && <h1> Blog part </h1>}
//           {activeMenu == "contact" && <h1> Contact part </h1>}


//         </div>

//       </div>


//     </>
//   )
// }

// export default App

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {

    // use find one (just one object)
    let [navbarData, setNavbarData] = useState({})

    useEffect(() => {
        async function fetchData() {
            let result = await axios.get("/api/v7/navbar/get-latest-navbar")
            setNavbarData(result.data.output)
            //console.log(result.data.output)
        }

        fetchData()
    }, [])

    return (

        <>
            <>
                <div className='bg-[#fff] py-[25px]'>

                    <div className="max-w-[1380px] mx-auto">


                        <div className='flex justify-between items-center'>

                            <img className='object-fit' src="/src/assets/logo.png" alt="" />

                            {/* Menu Item */}
                            <ul className='custom-navbar-text flex gap-x-[32px]'>

                                {navbarData?.menuItems?.map((item, index) => (
                                    <li key={index}>
                                        <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                                    </li>
                                ))}

                                <Link > <li>  </li> </Link>

                            </ul>

                            {navbarData.buttonShow &&
                                <button className='navbar-button-text rounded-[6px] bg-[#FF6B00] px-[32px] py-[15px]'>
                                    {navbarData?.buttonText}
                                </button>
                            }

                        </div>

                    </div>

                </div>

            </>

        </>
    );
};

export default NavbarComponent;
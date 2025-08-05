import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = () => {

    return (

        <>




            <ul className='cursor-pointer space-y-2 p-2'>
                <li><NavLink to="/admin/navbar">Navbar</NavLink></li>
                <li><NavLink to="/admin/banner">Banner</NavLink></li>
                <li><NavLink to="/admin/about">About</NavLink></li>
                <li><NavLink to="/admin/service">Service</NavLink></li>
                <li><NavLink to="/admin/resume">Resume</NavLink></li>
                <li><NavLink to="/admin/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/admin/testimonial">Testimonial</NavLink></li>
                <li><NavLink to="/admin/partner">Partner</NavLink></li>
                <li><NavLink to="/admin/blog">Blog</NavLink></li>
                <li><NavLink to="/admin/contact">Contact</NavLink></li>
                <li><NavLink to="/admin/footer">Footer</NavLink></li>



            </ul>


        </>
    );
};

export default MenuItem;
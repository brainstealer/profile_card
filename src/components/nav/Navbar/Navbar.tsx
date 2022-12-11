import React, { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './navbar.css'
import { useState } from 'react';

const Navbar: FC = () => {

    const [menuActive, setMenuActive] = useState(false);
    return (
        <>
            <div className='container'>
                <div className='header'>
                    <div className='nav_logo'>
                        <a href="/posts"><img src="../../../img/logo1.png" alt="logo" /></a>
                    </div>
                    <div className='nav_list'>
                        <NavLink className='nav_link' end to='/' >Home</NavLink>
                        <NavLink className='nav_link' to='/posts'>Posts</NavLink>
                        <NavLink className='nav_link' to='/contacts'>Contacts</NavLink>
                    </div>

                    <div className='nav_name'>Vlad</div>

                </div>

                <div className="nav_mobile">
                    <button type='button' onClick={() => setMenuActive(!menuActive)} className='nav_mobile_btn'>Menu</button>
                    <div className={menuActive ? 'nav_mobile_list mobile_active' : 'nav_mobile_list'}>
                        <NavLink onClick={() => setMenuActive(false)} className='nav_link' end to='/' >Home</NavLink>
                        <NavLink onClick={() => setMenuActive(false)} className='nav_link' to='/posts'>Posts</NavLink>
                        <NavLink onClick={() => setMenuActive(false)} className='nav_link' to='/contacts'>Contacts</NavLink>
                    </div>

                </div>

                <Outlet />
            </div>

        </>
    )
}

export default Navbar;
import React from 'react';
import s from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={s.link}>Profile</NavLink>
            </div>
            <div className={s.item }>
                <NavLink to="/dialogs" className={s.link}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={s.link}>Users</NavLink>
            </div>

            
        </nav>
    )
}

export default Navbar;
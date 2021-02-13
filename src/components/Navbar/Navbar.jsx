import React from 'react';
import NavbarItem from "./NavbarItem/NavbarItem";
import { NavLink } from "react-router-dom";

import './Navbar.css';

const Navbar = ({ parentClassName }) => {
    return (
        <ul className={`Navbar ${parentClassName}`}>
            <NavLink to='/profile' activeClassName='NavbarItem_active'>
                <NavbarItem text='Profile' />
            </NavLink>

            <NavLink to='/dialogs' activeClassName='NavbarItem_active'>
                <NavbarItem text='Messages' />
            </NavLink>
        </ul>

    );
};

export default Navbar;

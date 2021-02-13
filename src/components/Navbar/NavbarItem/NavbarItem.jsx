import React from 'react';
import './Navbar.css';

const NavbarItem = (props) => {
    return (
        <li className='NavbarItem'>{props.text}</li>
    );
};

export default NavbarItem;

import React from 'react';
import logo from '/public/vite.svg';
import reactImg from '/public/react.svg';
import {Link, NavLink} from "react-router-dom";
import {routesModel} from "../../utils/models.js";
import './header.css';

const Header = () => {
  return (
    <header className={'Header'}>
      <Link to={'/'} title={'Go to main'}>
        <img src={logo} alt={'logo'}/>
      </Link>

      <nav className={'NavMenu'}>
        <NavLink
          to={routesModel.home}
          className={({ isActive }) => isActive ? 'NavLink NavLink_Active' +
            ' NavMenu-Item' : 'NavLink NavMenu-Item'}
        >
          Home
        </NavLink>

        <NavLink
          to={routesModel.addTask}
          className={({ isActive }) => isActive ? 'NavLink NavLink_Active' +
            ' NavMenu-Item' : 'NavLink NavMenu-Item'}
        >
          Add task
        </NavLink>

        <NavLink
          to={routesModel.calendar}
          className={({ isActive }) => isActive ? 'NavLink NavLink_Active' +
            ' NavMenu-Item' : 'NavLink NavMenu-Item'}
        >
          Calendar
        </NavLink>
      </nav>

      <div>
        <img src={reactImg} alt={'react icon'} title={'Just image'}/>
      </div>
    </header>
  );
};

export default Header;

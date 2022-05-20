import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.item}>
				<NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
			</div>
			<div className={`${s.item} ${s.active}`}>
				<NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<a>News</a>
			</div>
			<div className={s.item}>
				<a>Music</a>
			</div>
			<div className={s.item}>
				<a>Settings</a>
			</div>
		</header>
	)
}

export default Header;
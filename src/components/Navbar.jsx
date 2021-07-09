import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () =>{
	return(
		<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
			<div className="container">
				<div className="navbar-brand">
					Note App
				</div>
				<ul className="navbar-nav">
			        <li className="nav-item">
			        	<NavLink className="nav-link active" to="/">Home</NavLink>
			        </li>
			        <li className="nav-item">
			        	<NavLink className="nav-link" to="/about">About</NavLink>
			        </li>
			        <li className="nav-item">
			        	<NavLink className="nav-link" to="/random">Random</NavLink>
			        </li>
		      	</ul>
			</div>
		</nav>
	)
	//нету функциональности, поэтому "return" можно не писать(можно стереть)
}
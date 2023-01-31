import React, { Fragment } from 'react';
import logo from '../assets/images/LR 2021.svg';
import { SlMenu } from 'react-icons/sl';
import { BiLeftArrow } from 'react-icons/bi';

window.addEventListener("click", e =>{
	
	const eleccion = e.target;
	const menu = document.querySelector(".menu_dinamico");
	const header = document.querySelector("header");

	if(eleccion.id === "menuMask"){
		menu.classList.toggle("menu_dinamico--activo");
		header.classList.toggle("header--activo");
	}
	else if(eleccion.className !== "botonera_boton"){
		menu.classList.remove("menu_dinamico--activo");
		header.classList.remove("header--activo");
	}
});

const Header = ()=>{
	return(

		<Fragment>
			<header>
				<a className="logotipo-container" href="#hero">
					<span className="logo-container">
						<img src={logo} alt="" />
					</span>
					<span className="header-title">
						Lucas Retamozo
					</span>
				</a>
				<nav className="menu_estatico">
					<ul>
						<li>
							<a className="boton_estatico" href="#portfolio">Proyectos realizados</a>
						</li>
						<li>
							<a className="boton_estatico" href="#experiencia">Tecnologías que manejo</a>
						</li>
						<li>
							<a className="boton_estatico" href="#contacto">Contactáme</a>
						</li>
					</ul>
				</nav>
				<span className="menu">
					<SlMenu />
					<div id="menuMask"></div>
				</span>
			</header>
			<nav className="menu_dinamico">
				<ul>
					<li>
						<a className="botonera_boton" href="#portfolio">Proyectos realizados <BiLeftArrow /></a>
					</li>
					<li>
						<a className="botonera_boton" href="#experiencia">Tecnologías que manejo <BiLeftArrow /></a>
					</li>
					<li>
						<a className="botonera_boton" href="#contacto">Contactáme <BiLeftArrow /></a>
					</li>
				</ul>
			</nav>
		</Fragment>

	)
}

export default Header;
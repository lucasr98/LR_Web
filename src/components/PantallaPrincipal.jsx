import React, { useState } from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';

import htmlLogo from '../assets/images/HTML5_logo_and_wordmark.svg';
import cssLogo from '../assets/images/CSS3_logo_and_wordmark.svg';
import jsLogo from '../assets/images/Javascript_badge.svg';
import reactLogo from '../assets/images/React-icon.svg';
import sassLogo from '../assets/images/Sass_Logo_Color.svg';
import bootslogo from '../assets/images/Bootstrap_logo.svg';
import phpLogo from '../assets/images/PHP-logo.svg';
import sqlLogo from '../assets/images/MySQL-Logo.svg';

import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandCss3 } from 'react-icons/tb';
import { TbBrandJavascript } from 'react-icons/tb';
import { IoLogoReact } from 'react-icons/io5';
import { TbBrandSass } from 'react-icons/tb';
import { SiBootstrap } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

class Experiencias{
	constructor(componente, nombre, logo, porcentaje, texto, bg){
		this.componente = componente;
		this.nombre = nombre;
		this.logo = logo;
		this.porcentaje = porcentaje;
		this.texto = texto;
		this.bg = bg;
	}
}

const expOriginal = [

	[<AiOutlineHtml5 />, 'HTML', htmlLogo, 95, 'HTML fué el primer lenguaje que aprendí. Al día de hoy cuento con mucha experiencia con ésta tecnología, pudiendo ser capaz de maquetar la estructura de prácticamente cualquier tipo de página.', '#FF8C35'],
	[<TbBrandCss3 />, 'CSS', cssLogo, 80, 'Respecto a CSS se añadir atributos a selectores universales, a traves del :root, crear variables de estilo, la utilizacion de pseudo clases y pseudo elementos, sobre cajas dinámicas como flexbox y grid, animaciones y diseño responsive, etc.', '#01B6F4'],
	[<TbBrandJavascript />, 'JavaScript', jsLogo, 65, 'Con JavaScript puedo llamar los elementos del DOM, manipular sus propiedades y manejar eventos. Tengo experiencia con operadores lógicos, matemáticos, sentencias condicionales, bucles y solicitudes fetch, y considerable nivel en POO entre otras cosas.', '#FDDE45'],
	[<IoLogoReact />, 'React', reactLogo, 75, 'Se crear componentes tanto de clase como funcionales, exportarlos e importarlos. Me se manejar muy bien con los props y los hooks de estado y efecto que posee React. Instalar modulos como Bootstrap o Masonry entre otros.', '#282C34'],
	[<TbBrandSass />, 'Sass', sassLogo, 70, 'Utilizo Sass para escribir CSS de una manera mas prolija y ordenada. Tengo conocimiento en el uso de variables, mixins, importación de otros archivos .scss, identación, etc.', '#D99CBD'],
	[<SiBootstrap />, 'Bootstrap', bootslogo, 60, 'Para maquetar algunas páginas web de forma mas rápida y estandarizada uso Bootstrap, ya sea Bootstrap 5 o, en proyectos de React, React-Bootstrap.', '#9379BB'],
	[<FaPhp />, 'PHP', phpLogo, 25, 'Se crear un formulario en php y enviar la información a una base de datos con ayuda de MySQL (al menos por el momento).', '#8993C1'],
	[<SiMysql />, 'MySQL', sqlLogo, 30, 'Se crear una base de datos a través de MySQL y guardar en él datos que se envían vía un formulario cuyos datos se guardan usando PHP.', '#4479A0']

]

const exp = [];

for(let i = 0; i < expOriginal.length; i++){
	exp[i] = new Experiencias(expOriginal[i][0], expOriginal[i][1], expOriginal[i][2], expOriginal[i][3], expOriginal[i][4], expOriginal[i][5]);
}

const PantallaPrincipal = () =>{

	const [expSelect, setExpSelect] = useState(exp[0])

	const resaltarExperiencia = (e)=>{
		const barra = document.querySelectorAll(".barra");
		for(let i = 0; i < exp.length; i++){
			barra[i].style.removeProperty("background");
		}
		for(let i = 0; i < exp.length; i++){
			if(e.target.parentNode.childNodes[1].innerHTML == exp[i].nombre || e.target.parentNode.parentNode.childNodes[0].childNodes[0].innerHTML == exp[i].nombre){
				setExpSelect(exp[i]);
				barra[i].style.background = "linear-gradient(to top, var(--color_a2), #fff";
			}
		}
	}

	return(

		<main className="main">
			<Hero exp={exp} resaltarExperiencia={resaltarExperiencia}/>
			<Portfolio />
			<Experience exp={exp} expSelect={expSelect} resaltarExperiencia={resaltarExperiencia}/>
			<Contact />
		</main>

	)
}

export default PantallaPrincipal;
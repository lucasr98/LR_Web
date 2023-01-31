import Project from './Project';

import imagenAdministrador from '../assets/images/Prueba-React-Administrador_de_cuentas.png'
import imagenCosmonauta from '../assets/images/Prueba-React-El_Cosmonauta.jpg'
import imagenEcommerce from '../assets/images/Prueba-React-E_commerce.png'
import imagenRemada from '../assets/images/Remada_x_el_Riachuelo_portada.jpg';
import imagenDelicias from '../assets/images/Delicias_de_Alma_portada.jpg';
import imagenLrDibuja from '../assets/images/LR_Dibuja_portada.jpg';

import imagenPortfolio from '../assets/images/Personal-portfolio_freeCodeCamp.jpg';
import imagenLoveRamen from '../assets/images/Landing-page_freeCodeCamp.jpg';
import imagenTechnicalDocument from '../assets/images/Technical-document-page_freeCodeCamp.jpg';
import imagenNewton from '../assets/images/Tribute-page_freeCodeCamp.jpg';

import imagenRueda from '../assets/images/Prueba-Rueda_v1_1.jpg';
import imagen2Jugadores from '../assets/images/Prueba-Juego_del_mas_rapido.jpg';
import imagenReloj from '../assets/images/Prueba-Reloj_web.jpg';
import imagenBotonColor from '../assets/images/Prueba-React-Boton_cambia_color.jpg';
import imagenLaplace from '../assets/images/Laplace_dos_dados.jpg';
import imagenMontyHall from '../assets/images/Problema_de_Monty_Hall.jpg';
import imagenBomba from '../assets/images/Prueba-Cuenta_regresiva.jpg';
import imagenVentilador from '../assets/images/Ventilador.jpg';
import imagenFrutas from '../assets/images/Prueba-Frutas.jpg';
import imagenTema from '../assets/images/Prueba-Tema.jpg';

class Proyectos{
	constructor(imagen, titulo, texto, url){
		this.imagen = imagen;
		this.titulo = titulo;
		this.texto = texto;
		this.url = url;
	}
}

const proyectosOriginal = [

	[
		[imagenAdministrador, 'Administrador de cuentas', 'Ésta WebApp es un modelo ficticio de administrador de contraseñas online. Permite registrarse, iniciar sesión y agregar, modificar o eliminar las cuentas que desees. Si querés hacer pruebas en la app tené en cuenta que los datos que ingreses se irán guardando en una base de datos (por lo que es aconsejable ingresar datos meramente ficticios).','https://main--heartfelt-parfait-c62075.netlify.app/'],
		[imagenCosmonauta, 'El Cosmonauta (Blog)', 'Ésta página es un modelo ficticio de blog web sobre noticias relacionadas con física y astronomía utilizando React JS y Sass. Algunos recursos como imágenes o textos de cada noticia son tomados de internet, no me pertenecen y su función es meramente estética.','https://lucasr98.github.io/Pruebas-React-El_Cosmonauta/'],
		[imagenEcommerce, 'La casa del Libro (E-commerce)', 'Ésta página es un modelo ficticio de e-commerce sobre venta de libros utilizando React JS y Bootstrap. Ninguno de los artículos vistos en la misma están a la venta y las imágenes de cada libro fué descargada de internet.','https://lucasr98.github.io/Pruebas-React-E_commerce_Libros/'],
		[imagenRemada, 'Remada X el Riachuelo', 'Este proyecto fué realizado en grupo para la materia DGPC Cátedra Díaz Cortez (FADU) en 2022. Consiste en una webapp sobre un evento que realiza Fundación X la Boca llamada "Remada X el Riachuelo".','http://www.diazcortez.com.ar/acumar/2022/jt34/webapp/index.html'],
		[imagenDelicias, 'Delicias de Alma', 'Se trata de una landing page acerca de un emprendimiento de cosas dulces situado en Buenos Aires donde se elaboran tortas, pasteles, budínes y pan dulces, alfajorcitos de maicena, brownies, cookies, etc.', 'https://lucasr98.github.io/Delicias_de_Alma/'],
		[imagenLrDibuja, 'LR Dibuja', 'Página de portfolio web sobre dibujos digitales que realizo en mis tiempos libres. Cuenta con una galería con imágenes modales, una seccion de información personal, y una de contácto.', 'https://lucasr98.github.io/LR_Dibuja.github.io/'],
		[imagenPortfolio, 'Porfolio personal', 'Primer intento de página de portfolio personal realizada para freeCodeCamp.', 'https://lucasr98.github.io/freeCodeCamp-Personal_portfolio_webpage/'],
		[imagenLoveRamen, 'Love Ramen', 'Página de destino (landing page) sobre comida japonesa, mas específicamente de ramen, realizada para freeCodeCamp.', 'https://lucasr98.github.io/freeCodeCamp-Product_landing_page/'],
		[imagenTechnicalDocument, 'Documentación técnica JavaScript', 'Página de documentación técnica sobre JavaScript realizada para freeCodeCamp.', 'https://lucasr98.github.io/freeCodeCamp-Technical_documentation_page/'],
		[imagenNewton, 'Tributo de Isaac Newton', 'Página tributo realizada para freeCodeCamp que habla sobre Isaac Newton el padre de la física.', 'https://lucasr98.github.io/freeCodeCamp-Tribute_page/']
	],
	[
		[imagenRueda, 'Rueda que acelera', 'Programa de prueba que consiste en una rueda que puede acelerar, mantener una velocidad constante y desacelerar manipulando ciertas configuraciones como el tiempo de aceleración o la velocidad máxima que alcanzará.', 'https://lucasr98.github.io/Pruebas-Rueda_1_1/'],
		[imagen2Jugadores, 'El más rápido gana', 'Programa donde dos jugadores tienen que competir presionando mas rápido que el otro una serie de botones. Se puede jugar contra la IA en 3 dificultades, o contra una segunda persona con su respectiva configuración.', 'https://lucasr98.github.io/Pruebas-Juego_del_mas_rapido/'],
		[imagenReloj, 'Reloj Web', 'Programa donde se utiliza el objeto global "Date" de javascript para obtener la hora y luego ser mostrada en pantalla manipulando los elementos HTML (no se utilizó ninguna fuente).', 'https://lucasr98.github.io/Pruebas-Reloj_web/'],
		[imagenBotonColor, 'Botón cambia color', 'Prueba donde, al escribir en el input algún color en formato css (palabras clave, web, hexadecimal, rgb, o hsl), o al presionar el botón que contiene el logo, el color en el fondo del logo cambia.', 'https://lucasr98.github.io/Pruebas-React-Boton_cambia_color/'],
		[imagenMontyHall, 'Puertas de Monty Hall', 'Prueba donde se disponen tres puertas (en una de ellas se esconde un premio) y tienes que elegir una. Una vez elegida la puerta, el programa abre una puerta que no contenga el premio y tienes que decidir si quedarte con la puerta que elegiste en un principio o cambiar de puerta.', 'https://lucasr98.github.io/Pruebas-El_problema_de_Monty_Hall/'],
		[imagenLaplace, 'Ley de Laplace', 'Demostración de la Ley de Laplace a partir de un programa que simula la tirada de dos dados. En éste programa se puede determinar la cantidad de veces que se tirarán los dados, se podrá observar los resultados que salieron por cada iteración y la cantidad total de veces que salió cada número por el total de iteraciones.', 'https://lucasr98.github.io/Pruebas-Laplace_dos_dados/'],
		[imagenBomba, 'Bomba con temporizador', 'Prueba donde, al hacer click al botón, una cuenta regresiva se activa hasta llegar a cero para terminar explotando.', 'https://lucasr98.github.io/Pruebas-Bomba_cuenta_regresiva/'],
		[imagenVentilador, 'Ventilador', 'Prueba donde, al hacer click en el primer ventilador, las aspas empiezan a girar (máximo de 3 velocidades), y si se hace click en el segundo interruptor, empieza a girar la rejilla.', 'https://lucasr98.github.io/Pruebas-Ventilador/'],
		[imagenFrutas, 'Elección de frutas', 'Prueba donde, al hacer click en una fruta, debajo surge una pequeña descripción de la misma.', 'https://codepen.io/lucasr98/pen/LYmGGyG'],
		[imagenTema, 'Selector de tema', 'Prueba donde, al hacer click en un switch, el tema de la página cambia por completo entre día/noche.', 'https://lucasr98.github.io/Pruebas-Cambio_de_tema/']
	]

]

const proyectosWeb = [];
const proyectosPrueba = [];

for(let i = 0; i < proyectosOriginal[0].length; i++){
	proyectosWeb[i] = new Proyectos(proyectosOriginal[0][i][0], proyectosOriginal[0][i][1], proyectosOriginal[0][i][2],proyectosOriginal[0][i][3]);
}

for(let i = 0; i < proyectosOriginal[1].length; i++){
	proyectosPrueba[i] = new Proyectos(proyectosOriginal[1][i][0], proyectosOriginal[1][i][1], proyectosOriginal[1][i][2],proyectosOriginal[1][i][3]);
}

const Portfolio = ()=>{
	return(

		<section id="portfolio" className="seccion section-bg">
			<h2>
				Proyectos Realizados
			</h2>
			<div className="parrafo_general">
				<h3>
					Desarrollo web
				</h3>
				<p>
					Estos proyectos consisten en paginas web como landing pages, páginas de tributo, páginas de cocumentación técnica, etc. Algunas de ellas fueron realizadas para freeCodeCamp, y otras como un trabajo personal y/o para comitentes. 
				</p>
				<Project $proyectos={proyectosWeb}/>
			</div>
			<div className="parrafo_general">
				<h3>
					Pruebas experimentales
				</h3>
				<p>
					Estos proyectos consisten en programas de prueba donde pongo en práctica mis conocimientos sobre HTML, CSS y JavaScript para desarrollar simuladores, juegos, etc. 
				</p>
				<Project $proyectos={proyectosPrueba}/>
			</div>
		</section>

	)
}

export default Portfolio;
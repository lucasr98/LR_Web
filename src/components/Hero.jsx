import React, { useState, useEffect } from 'react';

let contador = 0;

const Hero = (props)=>{

	const [experiencia, setExperiencia] = useState(props.exp[contador])

	useEffect(()=>{
		const interval = setInterval(()=>{
			contador++
			if(contador >= props.exp.length){
				contador = 0;
			}
			setExperiencia(props.exp[contador])
		}, 5000);
		return ()=> clearInterval(interval);
	}, []);

	return(

		<section id="hero" className="seccion">
			<div className="hero-parrafo_container">
                <div className="titles-container">
                	<h1>
	                	Desarrollador
	            	</h1>
	            	<h1 className="title_fx">
	            		Front-end
	        		</h1>
	                </div>
                <div className="parrafo">
                    <p className="light">Me llamo Lucas Retamozo y soy un desarrollador web Front-end de Argentina.</p>
                    <div className="experiencias-container">
                    	<p>Experiencia en:</p>
                    	<a href="#experiencia" className="experiencias" onClick={props.resaltarExperiencia} id="redirigirExperiencia">
							<span className="logos-container">{experiencia.componente}</span>
							<p>{experiencia.nombre}</p>
							<div className="experiencias-mascara"></div>
						</a>
                    </div>
                </div>
            </div>
		</section>

	)
}

export default Hero;
const Experience = (props)=>{
	return(

		<section id="experiencia" className="seccion section-bg">
			<h2>
				Tecnologías que manejo
			</h2>
			<div className="parrafo_general">
				<p>
					Tengo un amplio conocimiento en tecnologías como HTML, CSS y JavaScript. También sé sobre React, y un poco de Backend con tecnologías como PHP y MySQL (para crear bases de datos).
				</p>				
			</div>
			<div className="experiencias_container">
				<div className="experiencia_seleccionada">
					<div className="experiencia_seleccionada__background" style={{ backgroundColor: `${props.expSelect.bg}` }}>
						<div className="experiencia_seleccionada__img_container">
							<img id="experienciaLogo" src={props.expSelect.logo} />
						</div>
					</div>
					<div className="parrafo_general">
						<h3 id="experienciaTitulo">{`Experiencia en ${props.expSelect.nombre}`}</h3>
						<p id="experienciaTexto">{props.expSelect.texto}</p>
					</div>
				</div>
				<div className="lista_experiencias">

					{

						props.exp.map((experiencia, indice)=>{

							return(

								<div className="experiencia" key={indice}>
									<div className="experiencias-text_container">
										<span>
											{experiencia.nombre}
										</span>
										<span>
											{`${experiencia.porcentaje}%`}
										</span>
									</div>
									<div className="barra_container">
										<div className="barra" style={{width: `${experiencia.porcentaje}%`}}></div>
										<div className="barra__mask" onClick={props.resaltarExperiencia}></div>
									</div>
								</div>

							)
						})

					}
				
				</div>
			</div>
		</section>

	)
}

export default Experience;
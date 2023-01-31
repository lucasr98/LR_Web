import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { BiRightArrow } from 'react-icons/bi';

const Project = (props)=>{
	return(

		<ResponsiveMasonry columnsCountBreakPoints={{350: 1, 530: 2, 900: 3, 1300: 4, 1910: 5}}>
			<Masonry gutter={"1rem"}>
				{
					props.$proyectos.map((proyecto, indice)=>{

						return(

							<div className="grid-item" key={indice}>
								<div className="project-img_container">
									<img src={proyecto.imagen} alt={`imágen de ${proyecto.titulo}`} />
								</div>
								<h4 className="project-title">
									{proyecto.titulo}
								</h4>
								<p className="project-text">
									{proyecto.texto}
								</p>
								<a className="project_button" href={proyecto.url} target="_blank">Visitar <BiRightArrow /></a>
							</div>

						)

					})
				}
			</Masonry>
		</ResponsiveMasonry>

	)
}

export default Project;
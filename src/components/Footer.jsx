import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const Footer = ()=>{
	return(

		<footer>
			<div className="redes_container">
				<div className="redes">
					<h3>Redes:</h3>
					<a className="redes-item_container" href="https://www.linkedin.com/in/lucas-retamozo/" target="_blank">
						<AiOutlineLinkedin />
						<span>lucas-retamozo</span>
					</a>
					<a className="redes-item_container" href="https://github.com/lucasr98" target="_blank">
						<FaGithub />
						<span>lucasr98</span>
					</a>
					<a className="redes-item_container" href="https://codepen.io/lucasr98" target="_blank">
						<FaCodepen />
						<span>lucasr98</span>
					</a>
				</div>
				<div className="redes">
					<h3>Contácto:</h3>
					<a className="redes-item_container" href="mailto:lucas.rtmz98@gmail.com" target="_blank">
						<MdAlternateEmail />
						<span>lucas.rtmz98@gmail.com</span>
					</a>
					<a className="redes-item_container" href="https://wa.me/5491155013610" target="_blank">
						<FaWhatsapp />
						<span>1555013610</span>
					</a>
				</div>
				<div className="redes">
					<h3>Curriculum:</h3>
					<a className="redes-item_container" href="Lucas_Retamozo-CV-Front_end.pdf" download="Lucas Retamozo - Desarrollador Front-end.pdf">
						<ImProfile />
						<span>Lucas Retamozo CV</span>
					</a>
				</div>
			</div>
			<p>
				Ésta página consiste en un portfolio web personal desarrollado por mi persona, Lucas Retamozo. Las tecnologías implementadas para este proyecto son HTML, CSS, JavaScript, React para el maquetado, el paquete de Adobe para el diseño, y GitHub para alojar la página en un servidor público.
			</p>
		</footer>

	)
}

export default Footer;
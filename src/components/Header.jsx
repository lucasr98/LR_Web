import logo from '../assets/images/LR 2021.svg';
import { BsThreeDotsVertical } from 'react-icons/bs'

const Header = ()=>{
	return(

		<header>
			<a href="index.html" className="logotipo-container">
				<span className="logo-container">
					<img src={logo} alt="" />
				</span>
				<span className="header-title">Lucas Retamozo</span>
			</a>
			<span className="menu">
				<BsThreeDotsVertical />
			</span>
		</header>

	)
}

export default Header;
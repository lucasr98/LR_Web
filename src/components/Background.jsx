import lrLucas from '../assets/images/LR_Web-Lucas.png';
import lrCirculo from '../assets/images/LR_Web-Circulo.png';
import lrMascara from '../assets/images/LR_Web-Mascara.png';
import lrParticulas from '../assets/images/LR_Web-Particulas.png';

const Background = ()=>{
	return(

		<div className="background">
			<img id="lrParticulas" src={lrParticulas} />
			<img id="lrCirculo" src={lrCirculo} />
			<img id="lrMascara" src={lrMascara} />
			<img id="lrLucas" src={lrLucas} />
		</div>

	)
}

export default Background;
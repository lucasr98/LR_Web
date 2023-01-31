const cerrarAlerta = e =>{
	if(e.target.id == "warningBackground"){
		if (e.target.id !== "warningBackground"){
	  		return;
	  	}
	  	else{
	  		document.getElementById("warningBackground").style.removeProperty("display");
	  		document.querySelector("body").style.removeProperty("overflow");
		}
	}
	else if(e.target.classList.contains("warning_button")){
		document.getElementById("warningBackground").style.removeProperty("display");
		document.querySelector("body").style.removeProperty("overflow");
	}
}

const Warning = ()=>{
	return(

		<div className="warning_background" id="warningBackground" onClick={cerrarAlerta}>
			<div className="warning">
				<p className="warning_text">
					
				</p>
				<button className="warning_button" onClick={cerrarAlerta}>
					Aceptar
				</button>
			</div>
		</div>

	)
}

export default Warning;
import React, { useState } from 'react';
import Warning from './Warning';

const abrirAlerta = ()=>{
	document.getElementById("warningBackground").style.display = "flex";
	document.querySelector("body").style.overflow = "hidden";
}

const validarMail = (e)=>{
	const warn = document.querySelector(".warning_text");
	let warning = ""
	let entrar = false
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	warn.innerHTML = ""
	if (document.getElementById("contactName").value.length < 3){
		abrirAlerta()
		warning += `• El nombre no es válido.<br>`;
		entrar = true
	}
	if (!regexEmail.test(document.getElementById("contactEmail").value)){
		abrirAlerta()
		warning += `• El e-mail no es válido.<br>`;
		entrar = true
	}
	if (document.getElementById("contactMessage").value.length < 50){
		abrirAlerta()
		warning += `• El mensaje es muy corto.<br>`;
		entrar = true
	}
	if (entrar){
		e.preventDefault()
		abrirAlerta()
		warn.innerHTML = warning
	}
	else {
		abrirAlerta()
		warn.innerHTML = "¡Mensaje enviado!";
	}
}

window.addEventListener("click", (e)=>{
	const barrita = document.querySelectorAll(".form-input_container");
	const eleccion = e.target;
	if(eleccion.classList.contains("form-input")){
		for(let i = 0; i < barrita.length; i++){
			barrita[i].style.removeProperty("border-left");
		}
		eleccion.parentNode.style.borderLeft = ".5rem solid var(--color_a1)";
	}
	else{
		for(let i = 0; i < barrita.length; i++){
			barrita[i].style.removeProperty("border-left");
		}
	}
})

const Contact = ()=>{
	return(

		<section id="contacto" className="seccion">
			<Warning />
			<h2>
				Contactáme
			</h2>
			<div className="contact-form_container">
				<form onSubmit={validarMail} className="contact-form" method="post" action="https://formsubmit.co/lucas.rtmz98@gmail.com">
					<div className="form-elements_container">
		                <label htmlFor="contactName" id="labelName">Nombre</label>
		                <div className="form-input_container">
		                	<input type="text" name="name" className="form-input" id="contactName" placeholder="ej: Juan" />
		                </div>
		            </div>
		            <div className="form-elements_container">
		                <label htmlFor="contactEmail">E-mail</label>
		                <div className="form-input_container">
		                	<input type="email" name="email" className="form-input" id="contactEmail" placeholder="ej: juanp_97@gmail.com" />
		                </div>
		            </div>
		            <div className="form-elements_container">
		                <label htmlFor="contactMessage">Mensaje</label>
		                <div className="form-input_container">
		                	<textarea className="form-input" name="message" id="contactMessage" placeholder="caracteres (min. 50 / max. 1000)"></textarea>
		                </div>
		            </div>
	                <input type="submit" value="Enviar" className="form-submit warning_button" />
	                <input type="hidden" name="_next" value="https://lucasr98.github.io/LR_Web/" />
					<input type="hidden" name="_captcha" value="false" />
				</form>
			</div>
		</section>

	)
}

export default Contact;
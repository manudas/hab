import React from 'react';

// No need for a class here
const GarantiaHabitisimo = (props) => {
	return (
		<div className="container-fluid guaranteeBanner">
			<div className="container row mx-auto">
				<div className="logo col-md-12 col-lg-2">
					<img src="https://es.habcdn.com/images/warranty/guarantee-white.png" />    
				</div>
				<div className="col-md-12 col-lg-10 text">
					<div className="title t-lg">
						Con la garantía "Confianza habitissimo"      
					</div>
					<div className="t-sm description">
						Al contratar un profesional de la red habitissimo, obtienes una cobertura de hasta 3.000 € en caso de fraude por anticipos en los materiales del trabajo.        <a className="open-in-modal" href="https://www.habitissimo.es/garantia_habitissimo" data-bootbox-title="Garantía de Confianza habitissimo" data-trackevent="">Quiero saber más</a>
					</div>
				</div>
			</div>
		</div>
	);
}


export default GarantiaHabitisimo;

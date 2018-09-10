import React from 'react';

// No need for a className here
const RazonesPresupuesto = (props) => {
	return (
		<div id="ql-reasons" className="col-lg-5 col-md-5 col-xs-12">
			<ol id="ql-bullet-points" className="list-unstyled">
				<li className="e1">Cuéntanos <strong>qué necesitas</strong></li>
				<li className="e2">Recibe hasta <strong>4 presupuestos de tu zona</strong></li>
				<li className="e3">
					Compara ofertas y <strong>elige (o no) la mejor</strong>            
				</li>
			</ol>
			<div className="row">
				<div className="col-lg-4 col-md-4">
					<img src="https://es.habcdn.com/images/landing/rick/pros/generic.jpg" id="ql-professional" className="hidden-xs hidden-sm" alt="" />
				</div>
				<div className="col-lg-8 col-md-8">
					<div id="ql-advantages" className="hidden-sm">
						<ul className="list-unstyled">
							<li className="free">
								<strong>Es Gratis</strong>
								<p>Recibe varios presupuestos de forma gratuita y sin compromiso.</p>
							</li>
							<li className="time">
								<strong>Ahorra Tiempo</strong>
								<p>No pierdas tiempo buscando empresas. Ellas te contactan a ti.</p>
							</li>
							<li className="money">
								<strong>Ahorra dinero</strong>
								<p>Tienes más de un presupuesto para comparar.</p>
							</li>
							<li className="best">
								<strong>Encuentra a los mejores</strong>
								<p>Elige a los profesionales mejor valorados por los usuarios.</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RazonesPresupuesto;

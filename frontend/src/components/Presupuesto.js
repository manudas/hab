import React from 'react';

import RazonesPresupuesto from './RazonesPresupuesto';
import SolicitaPresupuesto from './SolicitaPresupuesto';
import GarantiaHabitissimo from './GarantiaHabitissimo';

// No need for a class here
const Presupuesto = (props) => {
	return (
		<div id="form-wrapper">
			<div className="container-fluid gray-container ql-wrapper">
				<div className="container">
					<div className="ql-header ql-header-es">
						<h1 className="side_label t-lg ">
							Pide presupuestos          
						</h1>
						<div id="ql-tagline" className="t-sm text-semibold">
							Construcciones y reformas, instalaciones, limpieza, mudanzas, arquitectos y más…
						</div>
					</div>
					{/* <!-- .header --> */}
				</div>
			</div>
			<div className="container-fluid gray-container">
				<div className="container">
					<div className="row form-area">
						<RazonesPresupuesto />
						<SolicitaPresupuesto />
					</div>
				</div>
			</div>
			<GarantiaHabitissimo />
		</div>
	);
}

export default Presupuesto;

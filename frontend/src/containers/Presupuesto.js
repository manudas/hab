import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RazonesPresupuesto from '../components/RazonesPresupuesto';
import SolicitaPresupuesto from './SolicitaPresupuesto';
import GarantiaHabitissimo from '../components/GarantiaHabitissimo';

import {restorePreviousData} from '../actions_creators/action_creator_onload'

// No need for a class here
class Presupuesto extends Component {
	render() {
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
	componentDidMount() {
		this.props.restorePreviousData();
	}
}

function mapDispatchToProps(dispatch) {
	bindActionCreators( {fields: restorePreviousData}, dispatch);
}


export default connect(null, mapDispatchToProps)(Presupuesto);

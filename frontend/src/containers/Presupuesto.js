import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RazonesPresupuesto from '../components/RazonesPresupuesto';
import SolicitaPresupuesto from './SolicitaPresupuesto';
import GarantiaHabitissimo from '../components/GarantiaHabitissimo';

import {restore_data} from '../actions_creators/action_creator_onload'

class Presupuesto extends Component {
	constructor(props) {
        super(props);
	}
	
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
	componentWillMount() {
		this.props.restore_data();
	}
}

/**
 * Connects our action creators with out
 * redux / component ecosystem
 */
function mapDistpatchToProps(dispatch) {
	return bindActionCreators({
		restore_data: restore_data
	}, dispatch);
}
  
export default connect(null, mapDistpatchToProps)(Presupuesto);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { withCookies, Cookies } from 'react-cookie';

class SolicitarPresupuesto extends Component {

	steps = 
		[
			{current_step: 'location_step', next_step: 'categories_step'},
			{current_step: 'categories_step', previous_step: 'location_step', next_step: 'estimated-date-step'},
			{current_step: 'estimated-date-step', previous_step: 'location_step', next_step: 'description-step'},
			{current_step: 'description-step', previous_step: 'estimated-date-step', next_step: 'contact_details'},
			{current_step: 'contact_details', previous_step: 'description-step'}
		];


	constructor(props) {
        	super(props);
			this.continuePressed = false;
	}

	componentDidMount() {
		this.current_step = (this.props.fields.step != undefined) ? this.props.fields.step : 'location_step';
	}
	
	/**
	 * Prevents unwanted submition
	 * and manages the desired behaviour
	 * when submiting
	 * @param {*} event 
	 */
	onFormSubmit(event) {
		event.preventDefault();
		this.continuePressed = true;
		this.moveForward(event);
	}

	/**
	 * Renders the component
	 */
	render() {
		return (
			<div id="ql-quotation-request" className="col-lg-7 col-md-7 col-12">
				<div id="ql-form-container" className="form-40pct form-rick-40pct  header-container">
					<form onSubmit={this.onFormSubmit.bind(this)} action="//localhost/nuevo?source_page=quotation-showList#" method="post" id="ql-form" className="step-1 max-1 lang-es bg-light border" data-trackid="ProcesoSolicitud">
						<i className="icon icon-spinner icon-spin hidden"></i>
						<a name="form"></a>
						<header className="quotation-form-header clearfix ">
							<h2 className="t-m text-semibold bg-dark text-light">
								Solicita presupuestos                    <small>¡Es gratis!</small>
							</h2>
						</header>
						<div className="steps row" id="steps">
							<div className="progress-container col-lg-12 col-md-12">
								<div className="col-lg-12 col-md-12">
									<div className="clearfix">
										<div className="progress hab-progress-bar unique quotation-progress low">
											<div className="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="1" style={{ width: '20%' }}>
												<span className="sr-only">1%</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="location_step" className="step col-12" data-step-name="location_step" style={{ display: this.current_step == 'location_step' ? 'block' : 'none' }}>
								<input name="step_fields" id="step_fields" value="location_id,zip" type="hidden" />
								<div className="fields">
									<label className="title-label mb-5" htmlFor="direccion">¿Dónde quieres realizar el trabajo?</label>
									<Field 
										name="direccion"
										onChange={this.saveCookieValue.bind(this)}
										component={this.renderTextField.bind(this)}
										required={true}
										label="Código postal o dirección"
										className = "formField" 
										value={this.props.fields.direccion}
									/>		
								</div>
							</div>
							<div id="categories_step" className="step col-12" data-step-name="categories_step" style={{ display: this.current_step == 'categories_step' ? 'block' : 'none' }}>
								<input name="step_fields" id="step_fields" value="category_id" type="hidden" />
								<div className="fields">

									<Field 
										name="categoria"
										onChange={this.saveCookieValue.bind(this)}
										component={this.renderTextField.bind(this)}
										required={false}
										label="Categoría"
										className="formField"
										value={this.props.fields.categoria}
									/>
									
								</div>
							</div>
							<div id="estimated-date-step" className="step col-12" data-step-name="estimated-date-step" style={{ display: this.current_step == 'estimated-date-step' ? 'block' : 'none' }}>
								<input name="step_fields" id="step_fields" value="estimated_date" type="hidden" />
								<div className="fields">
									<div className="form-field form-group responsive_select" id="p_estimated_date" data-original-title="" title="">
										<label className="title-label" htmlFor="estimated_date">¿Cuándo quieres realizar el trabajo?</label>
										<div className="input-container">
											<div className="radios checkbox-group" id="estimated_date" name="estimated_date" />
											<div className="col-lg-12">
												<input name="estimated_date" value="ASAP" id="estimated_date_ASAP" type="radio" />
												<label className="button-label" htmlFor="estimated_date_ASAP">
													Lo antes posible</label>
											</div>
											<div className="col-lg-12">
												<input name="estimated_date" value="LESS_3M" id="estimated_date_LESS_3M" type="radio" />
												<label className="button-label" htmlFor="estimated_date_LESS_3M">
													De 1 a 3 meses</label>
											</div>
											<div className="col-lg-12">
												<input name="estimated_date" value="MORE_3M" id="estimated_date_MORE_3M" type="radio" />
												<label className="button-label" htmlFor="estimated_date_MORE_3M">
													Más de 3 meses</label>
											</div>
											<div className="col-lg-12">
												<input name="estimated_date" value="NO_PLANNED" id="estimated_date_NO_PLANNED" type="radio" />
												<label className="button-label" htmlFor="estimated_date_NO_PLANNED">
													De momento no tengo pensado hacerlo</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="description-step" className="step col-12" data-step-name="description-step" style={{ display: this.current_step == 'description-step' ? 'block' : 'none' }}>
							<div className="fields">
								<input name="step_fields" id="step_fields" value="description" type="hidden" />
								<div className="form-field form-group">
									<label className="title-label" htmlFor="description">Cuéntanos más detalles sobre el trabajo, si quieres</label>
									<div className="input-container">
										<textarea rows="6" cols="30" name="description" className="form-control" id="description" placeholder="Si lo deseas, puedes dar más detalles del trabajo que necesitas para que los profesionales sean más precisos a la hora de pasarte presupuesto. No incluyas ningún dato de contacto."></textarea>
									</div>
								</div>
							</div>
							<div className="fields">
								<script src="https://www.habitissimo.es/components/plupload/js/plupload.full.min.js"></script>
								<div className="upload-photo-button">
									<div id="pictures" className="row">
										<div className="col-md-12 form-group clearfix">
											<ul className="clearfix">
											</ul>
										</div>
									</div>
									<div className="row question-form-more">
										<div className="col-12 question-form-photos text-center">
											<div id="upload-picture" title="" className="btn btn-lg btn-default btn-icon" style={{ position: 'relative', zIndex: 1 }}>
												<i className="icon icon-camera-o icon-lg"></i>
												Adjuntar fotografías        <span className="muted">(si quieres)</span>
											</div>
											<div id="html5_1cmn7aof8adb28jlct17vl1kuk3_container" className="moxie-shim moxie-shim-html5" style={{ position: 'absolute', top: '0px', left: '0px', width: '0px', height: '0px', overflow: 'hidden', zIndex: 0 }}><input id="html5_1cmn7aof8adb28jlct17vl1kuk3" style={{ fontSize: '999px', opacity: 0, position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%' }} multiple="" accept="image/jpeg,image/png,image/gif,image/bmp" type="file" /></div>
										</div>
									</div>
									<input name="images" type="hidden" />
								</div>
							</div>
						</div>
						<div id="contact_details" className="step col-12 info-step" data-step-name="contact_details" style={{ display: this.current_step == 'contact_details' ? 'block' : 'none' }}>
							<input name="step_fields" id="step_fields" value="contact_name,contact_mail,contact_phone,phone_provider,phone_type,referrer,newsletter_subscribe,contact_phone_secondary" type="hidden" />
							<div className="fields info-fields">
								<label className="title-label" htmlFor="zip">Tus datos de contacto</label>
								<div className="form-field form-group p_name">
									<label className="" htmlFor="contact_name">Tu nombre</label>
									<div className="">
										<input id="contact_name" className="full-width fb-input-name form-control" name="name" value="" autoComplete="nope" type="text" />
									</div>
								</div>
								<div className="form-field form-group p_email" data-original-title="" title="">
									<label className="" htmlFor="email">E-mail</label>
									<div className="">
										<input id="contact_mail" className="full-width fb-input-email form-control" name="email" value="" autoComplete="nope" type="text" />
									</div>
								</div>
								<div className="form-field form-group p_phone_1" data-original-title="" title="">
									<label className="" htmlFor="phone">Teléfono</label>
									<div id="contact-phone-container">
										<input id="contact_phone" name="phone" className="full-width form-control" value="" autoComplete="nope" type="text" />
									</div>
								</div>
								<p id="quality-advise" className="m-text hidden">
									Los profesionales pagan una cuota por acceder a tu solicitud. Por favor, asegúrate de que la información facilitada es correcta.
						</p>
								
								<div className="row">
									<div className="col-12 terms-column">
										<div className="form-field form-group p_terms">
											<div className="check-field">
												<label>
													<input name="terms_and_conditions" id="terms_and_conditions" type="checkbox" />       He leído y acepto la Política de Privacidad y Condiciones que se presenta <a target="_blank" href="https://www.habitissimo.es/politica_de_privacidad" >aquí</a>    </label>
											</div>
										</div>
										<div className="form-field form-group p_bulletin">
											<div className="check-field">
												<label>
													<input name="third_party" id="third_party" type="checkbox" />      Deseo recibir comunicaciones comerciales de terceros    </label>
											</div>
										</div>
									</div>
								</div>
								<div className="clearfix alert notice notice_info">
									<i className="icon icon-info-circle-o"></i>
									<span className="msg">Comprueba que tus datos son correctos ya que <b>los profesionales pagan una cuota</b> para poder acceder a tu solicitud de presupuesto.</span>
								</div>
							</div>
						</div>

						<div className="form-submit text-center" id="form-submit" style={{ display: 'block' }}>
							<input name="step" value="1" id="step" type="hidden" />
							<input name="is-ondemand" value="0" id="is-ondemand" type="hidden" />
							<input name="source_page" value="quotation-showList" id="source_page" type="hidden" />
							<small className="form-step">
								<a href="javascript:void(0)" onClick={this.moveBack.bind(this)} id="previous-step" className="back btn-link" style={{ display: this.hasPreviousStep() ? 'block' : 'none' }}>« Volver</a>
							</small>
							<button className="btn btn-primary btn-lg next ql-submit" id="next-step">Continuar »</button>
							<button className="btn btn-primary btn-lg next ql-submit" id="submit-quotation" style={{ display: 'none' }}>Solicitar presupuestos</button>
							<span className="text text-center mb-4">
								gratis y sin compromiso      </span>
						</div>
					</form>
				</div>

				<div className="clear mt_30">
					<span className="as-seen-on-tv">&nbsp;</span>
				</div>
			</div >
		);
	}

	/**
	 * Generic method to render a fields
	 * @param {*} field 
	 */
	renderTextField(field) {
		let empty = 
			(<div className="error-container">
				<span className="control-label form_error" id={field.input.name+"_error"}>Debes rellenar este campo</span>
			</div>);
		return (
			<div className="form-field form-group p_zip  ">
				<label id="zip-label" htmlFor="direccion">{field.label}</label>
				{field.required && (field.meta.touched || this.continuePressed) && 
					!field.input.value ? empty : ''}
				
				<div className="row">
					<div className="col-sm-6 col-12 one-line-height">
					<input id={field.input.name} size="6" className={"form-control "+field.className} autoComplete="nope" type="text" 
						{...field.input}
						data-valid={field.required && !field.input.value ? false : true}
					/>&nbsp;	
					</div>
				</div>
			</div>);
	}

	/**
	 * Saves the value of the input in a cookie
	 * @param {*} event 
	 */
	saveCookieValue(event) {
		let value = event.target.value;
		let name = event.target.name;
		this.props.cookies.set(name, value, { path: '/' });
	}

	/**
	 * Check if the currents state has a previous step
	 */
	hasPreviousStep() {
		let current_step = this.current_step;
		for (let i = 0; i < this.steps.length; i++) {
			var step_obj = this.steps[i];
			if (step_obj.current_step == current_step) {
				break;
			}
		}
		let previous_step = step_obj.previous_step;
		return (typeof previous_step !== 'undefined');
	}

	/**
	 * Moves forward in the current
	 * budget step
	 * @param {*} event 
	 */
	moveForward(event) {
		let current_step = this.current_step;
		for (let i = 0; i < this.steps.length; i++) {
			var step_obj = this.steps[i];
			if (step_obj.current_step == current_step) {
				break;
			}
		}
		this.continuePressed = true;
		let next_step = step_obj.next_step;
		// let previous_step = step_obj.previous_step;

		let container = document.getElementById(current_step);

		let fields = container.getElementsByClassName("formField");
		let validationPassed = true;
		for (let i = 0; i < fields.length; i ++) {
			let element = fields[i];
			var valid = element.getAttribute('data-valid');
			if (!valid) {
				validationPassed = false;
				break;
			}
		}
		if (validationPassed) {
			if (typeof next_step !== 'undefined'){
				this.current_step = next_step;
				this.props.cookies.set('step', next_step, { path: '/' });
			}
			else {
				// send to the server, no more steps
			}
		}
	}

	/**
	 * Moves to a previous step in 
	 * the current budget state
	 * @param {*} event 
	 */
	moveBack(event) {
		let current_step = this.current_step;
		for (let i = 0; i < this.steps.length; i++) {
			var step_obj = this.steps[i];
			if (step_obj.current_step == current_step) {
				break;
			}
		}
		let previous_step = step_obj.previous_step;
		if (typeof previous_step !== 'undefined') {
			this.props.cookies.set('step', previous_step, { path: '/' });
			this.current_step = previous_step;
		}
	}
}

/**
 * Ensure all the fields are correct
 * before the submition to the backend
 * @param {*} values 
 */
function validate(values) {
	var errores = {};
	if (!values.direccion) {
		errores.direccion = "Error codigo postal / direccion";
	}
	return errores;
}

const mapStateToProps = state => ({
  fields: state.fields
});

export default connect(mapStateToProps)(reduxForm({
	validate: validate,
	form: 'budgetForm'
})(withCookies(SolicitarPresupuesto)));

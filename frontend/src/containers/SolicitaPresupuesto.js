import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { withCookies, Cookies } from 'react-cookie';

import RadioButtons from '../components/RadioButtons';

class SolicitarPresupuesto extends Component {

	steps = 
		[
			{current_step: 'location_step', next_step: 'categories_step'},
			{current_step: 'categories_step', previous_step: 'location_step', next_step: 'estimated-date-step'},
			{current_step: 'estimated-date-step', previous_step: 'categories_step', next_step: 'description-step'},
			{current_step: 'description-step', previous_step: 'estimated-date-step', next_step: 'contact_details'},
			{current_step: 'contact_details', previous_step: 'description-step'}
		];


	constructor(props) {
        	super(props);
			this.continuePressed = false;
			this.renderText = this.renderTextField.bind(this,'');
			this.renderTextArea = this.renderTextAreaField.bind(this);
			this.renderTextEmail = this.renderTextField.bind(this, 'email');
	}

	componentWillUpdate() {
		if (this.lastFormWasValid) {
			this.continuePressed = false;
		}
	}

	componentDidMount() {
		this.props.fields.step = (this.props.fields.step != undefined) ? this.props.fields.step : 'location_step';
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
		this.forceUpdate();
	}

	/**
	 * Renders the component
	 */
	render() {
		var percentage = this.calculateStepPercentage();
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
											<div className="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="1" style={{ width: percentage+'%' }}>
												<span className="sr-only">{percentage}%</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="location_step" className="step col-12" data-step-name="location_step" style={{ display: this.props.fields.step == 'location_step' ? 'block' : 'none' }}>
								<input name="step_fields" id="step_fields" value="location_id,zip" type="hidden" />
								<div className="fields">
									<label className="title-label mb-5" htmlFor="direccion">¿Dónde quieres realizar el trabajo?</label>
									<Field 
										name="direccion"
										onChange={this.saveCookieValue.bind(this)}
										component={this.renderText}
										required={true}
										label="Código postal o dirección"
										className = "formField"
									/>		
								</div>
							</div>
							<div id="categories_step" className="step col-12" data-step-name="categories_step" style={{ display: this.props.fields.step == 'categories_step' ? 'block' : 'none' }}>
								<input name="step_fields" id="step_fields" value="category_id" type="hidden" />
								<div className="fields">

									<Field 
										name="categoria"
										onChange={this.saveCookieValue.bind(this)}
										component={this.renderText}
										label="Categoría"
										className="formField"
										required={true}
									/>
									
									<Field 
										name="subcategoria"
										onChange={this.saveCookieValue.bind(this)}
										component={this.renderText}
										label="Subcategoría. Por favor sea más específico (no integrado en Back)"
										className="formField"
										required={true}
									/>

								</div>
							</div>
							<div id="estimated-date-step" className="step col-12" data-step-name="estimated-date-step" style={{ display: this.props.fields.step == 'estimated-date-step' ? 'block' : 'none' }}>
								<input name="step_fields" id="step_fields" value="estimated_date" type="hidden" />
								<div className="fields">
									<div className="form-field form-group responsive_select" id="p_estimated_date" data-original-title="" title="">
										<label className="title-label" htmlFor="estimated_date">¿Cuándo quieres realizar el trabajo? NO INTEGARDO EN BACK</label>
										<div className="input-container">
											<div className="radios checkbox-group" id="estimated_date" name="estimated_date" />

											<RadioButtons
												className="col-lg-12"
												onChange={this.saveCookieValue.bind(this)}
												name="estimated_date"
												options={[
													{
														id: 'estimated_date_ASAP',
														label: 'Lo antes posible',
														value: 'ASAP',
														className: "formField "
													},
													{
														id: 'estimated_date_LESS_3M',
														label: 'De 1 a 3 meses',
														value: 'LESS_3M',
														className: "formField "
													},
													{
														id: 'estimated_date_MORE_3M',
														label: 'Más de 3 meses',
														value: 'MORE_3M',
														className: "formField "
													},
													{
														id: 'estimated_date_NO_PLANNED',
														label: 'De momento no tengo pensado hacerlo',
														value: 'NO_PLANNED',
														className: "formField "
													}
												]}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="description-step" className="step col-12" data-step-name="description-step" style={{ display: this.props.fields.step == 'description-step' ? 'block' : 'none' }}>
							<div className="fields">
								<input name="step_fields" id="step_fields" value="description" type="hidden" />

								<Field
									className="formField"
									rows="6"
									cols="30"
									name="descripcion" 
									placeholder="Danos más detalles del trabajo que necesitas para que los profesionales sean más precisos a la hora de pasarte presupuesto. No incluyas ningún dato de contacto."
									onChange={this.saveCookieValue.bind(this)}
									label="Cuéntanos más detalles sobre el trabajo"
									required={true}
									component={this.renderTextArea}
								/>

							</div>				
						</div>
						<div id="contact_details" className="step col-12 info-step" data-step-name="contact_details" style={{ display: this.props.fields.step == 'contact_details' ? 'block' : 'none' }}>
							<input name="step_fields" id="step_fields" value="contact_name,contact_mail,contact_phone,phone_provider,phone_type,referrer,newsletter_subscribe,contact_phone_secondary" type="hidden" />
							<div className="fields info-fields">
								<label className="title-label" htmlFor="zip">Tus datos de contacto</label>
								<Field 
									key="nombre"
									name="nombre"
									onChange={this.saveCookieValue.bind(this)}
									component={this.renderText}
									required={true}
									label="Tu nombre"
									className = "formField full-width fb-input-name"
								/>
								<Field 
									key="email"
									name="email"
									ref="email"
									onChange={this.saveCookieValue.bind(this)}
									onBlur={this.validateEmail.bind(this)}
									component={this.renderTextEmail}
									required={true}
									label="E-mail"
									className = "formField full-width fb-input-name"
								/>
								<Field 
									key="telefono"
									name="telefono"
									onChange={this.saveCookieValue.bind(this)}
									component={this.renderText}
									required={true}
									label="Teléfono"
									className = "formField full-width fb-input-name"
								/>

								<p id="quality-advise" className="m-text hidden">
									Los profesionales pagan una cuota por acceder a tu solicitud. Por favor, asegúrate de que la información facilitada es correcta.
								</p>
								
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
	 * Generic method to render a textfield for SolicitarPresupuesto.js
	 * @param {*} field 
	 */
	renderTextAreaField(field) {
		let empty = 
			(<div className="error-container">
				<span className="control-label form_error" id={field.input.name+"_error"}>Debes rellenar este campo</span>
			</div>);
		return (
			<div className="form-field form-group">
				<label className="title-label" htmlFor="description">{field.label}</label>
				{field.required && (field.meta.touched || this.continuePressed) && 
					!field.input.value ? empty : ''}
				<div className="input-container">
					<textarea 
						rows={field.rows} 
						cols={field.cols} 
						name={field.name} 
						className={"form-control "+field.className} 
						id={field.name} 
						placeholder={field.placeholder}
						{...field.input}
						data-valid={field.required && !field.input.value ? false : true}
						></textarea>
				</div>
			</div>
		);
	}

	/**
	 * Generic method to render a fields for SolicitarPresupuesto.js
	 * @param {*} field 
	 */
	renderTextField(reference, field) {
		if (reference && this.refs[reference]) {
			var async_invalid_data = this.refs[reference].validationError;
		}
		let empty_error = "Debes rellenar este campo";
		let validation_error = "La validacion de este campo ha fallado";
		let error = 
			(<div className="error-container">
				<span className="control-label form_error" id={field.input.name+"_error"}>{ field.required && !field.input.value ? empty_error : validation_error }</span>
			</div>);
		return (
			<div className={"form-field form-group p_"+field.input.name}>
				<label id={field.input.name+"-label"} htmlFor={field.input.name}>{field.label}</label>
				{((field.required && (field.meta.touched || this.continuePressed) && 
					!field.input.value) || async_invalid_data || (field.meta.invalid && field.input.value)) ? error : ''}
				
				<div className="row">
					<div className="col-sm-6 col-12 one-line-height">
					<input id={field.input.name} size="6" className={"form-control "+field.className} autoComplete="nope" type="text" 
						{...field.input}
						data-valid={((field.required && !field.input.value) || async_invalid_data) || (field.meta.invalid && field.input.value) ? false : true}
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
	 * Calculates in which percentage of
	 * the form we are at the moment, to
	 * print the progress bar properly
	 */
	calculateStepPercentage() {
		let current_step = this.props.fields.step;
		for (var i = 0; i < this.steps.length; i++) {
			var step_obj = this.steps[i];
			if (step_obj.current_step == current_step) {
				break;
			}
		}
		return (i*100)/(this.steps.length-1);
	}


	/**
	 * Check if the currents state has a previous step
	 */
	hasPreviousStep() {
		let current_step = this.props.fields.step;
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
		let current_step = this.props.fields.step;
		for (let i = 0; i < this.steps.length; i++) {
			var step_obj = this.steps[i];
			if (step_obj.current_step == current_step) {
				break;
			}
		}
		// this.continuePressed = true;
		let next_step = step_obj.next_step;
		// let previous_step = step_obj.previous_step;

		let container = document.getElementById(current_step);

		let fields = container.getElementsByClassName("formField");
		let validationPassed = true;
		for (let i = 0; i < fields.length; i ++) {
			let element = fields[i];
			var valid = element.getAttribute('data-valid');
			if (valid === 'false') {
				validationPassed = false;
				break;
			}
		}
		if (validationPassed) {
			this.lastFormWasValid = true;
			if (typeof next_step !== 'undefined'){
				this.props.fields.step = next_step;
				this.props.cookies.set('step', next_step, { path: '/' });
			}
			else {
				// send to the server, no more steps
				this.saveBudget(event);
			}
		}
		else {
			this.lastFormWasValid = false;
		}
	}

	/**
	 * Moves to a previous step in 
	 * the current budget state
	 * @param {*} event 
	 */
	moveBack(event) {
		let current_step = this.props.fields.step;
		for (let i = 0; i < this.steps.length; i++) {
			var step_obj = this.steps[i];
			if (step_obj.current_step == current_step) {
				break;
			}
		}
		let previous_step = step_obj.previous_step;
		if (typeof previous_step !== 'undefined') {
			this.props.cookies.set('step', previous_step, { path: '/' });
			this.props.fields.step = previous_step;
		}
	}
	
	/**
	 * Launches an ajax request and
	 * sets a promise to validate the
	 * field
	 * @param {*} event 
	 */
	validateEmail(event) {

		let emailField = this.refs["email"];
		let email = event.target.value;
		let email_url = '//' + window.location.hostname + '/api/index.php/validateemail/' + email;

		fetch(email_url) // Call the fetch function passing the url of the API as a parameter
			.then((response) => response.json())
				.then((data) => { 
					// Your code for handling the data you get from the API
					if (data.correcto === false) {
						emailField.validationError = true;
						this.forceUpdate();
					}
					else {		
						if (emailField.validationError == true) {
							emailField.validationError = false;
							this.forceUpdate();
						}
						// 
					}
					// alert(event);
				})
				.catch((error) => {
					// This is where you run code if the server returns any errors
					console.error(`An error has ocurred calling api url ${email_url}\n: ${error}`);
				});
	}

	/**
	 * Sends the save request to the api,
	 * so as to save this form
	 * @param {*} event 
	 */
	saveBudget(event) {
		let _API_save_url = '//' + window.location.hostname + '/api/index.php/';

		let fields = document.getElementsByClassName("formField");
		let data = new FormData();
		for (let i = 0; i < fields.length; i ++) {
			let element = fields[i];
			let name = element.getAttribute('name');
			if (element.tagName.toLocaleLowerCase() === 'textarea') {
				var value = element.innerHTML;
			}
			else { // input...
				var value = element.getAttribute('value');
			}
			let type = element.getAttribute('type');
			if (type === 'radio') {
				if (element.checked) {
					data.append(name, value);
				}
			}
			else {
				data.append(name, value);
			}
		}
		// testing mode for PHP / xDebug
		// data.append ('XDEBUG_SESSION', 'phpstorm');
		fetch(_API_save_url, // Call the fetch function passing the url of the API as a parameter
			{
				method: 'POST',
				body: data, // data can be object or string (JSon string)
				
				headers: {
					'Accept': 'application/json',
                	// 'Content-Type': 'application/json'
				},
			}) 
			.then((response) => response.json())
				.then((data) => { 
					// Your code for handling the data you get from the API
					if (data.correcto === true) {
						alert("Se insertó el presupuesto correctamente");
					}
					else {		
						let error = data.error ? "Error:\n" + data.error : ''
						alert("El presupuesto no ha sido insertado. " + error);
					}
				})
				.catch((error) => {
					// This is where you run code if the server returns any errors
					console.error(`An error has ocurred calling api url ${_API_save_url}\n: ${error}`);
				});
	}
}

/**
 * Ensure all the fields are correct
 * before the submition to the backend
 * @param {*} values 
 */
function validate(values) {
	// No es necesaria esta funcion pues no enviamos el formulario
	// como tal, si no lo que lo hacemos a través de ajax con fetch
	var errores = {};
	
	if (!values.direccion) {
		errores.direccion = "Error codigo postal / dirección";
	}
	
	if (!values.categoria) {
		errores.categoria = "Error en categoría o subcategoría";
	}

	if (!values.subcategoria) {
		errores.subcategoria = "Error en categoría o subcategoría";
	}

	if (!values.telefono || isNaN(values.telefono)) {
		errores.telefono = "Error en telefono";
	}
	if (!values.nombre) {
		errores.nombre = "Error en nombre";
	}
	if (!values.email || values.email.includes('hotmail')) {
		errores.email = "Error en email";
	}
	if (!values.descripcion ) {
		errores.descripcion = "Error en descripcion";
	}

	return errores;
}

/**
 * Associates the desired state fields,
 * usually all those related with this
 * component, whith the props of it
 * @param {*} state 
 */
const mapStateToProps = state => {
	var decodedInitialValues = {};
	for (var key in state.fields) {
		decodedInitialValues[key] = decodeURIComponent(state.fields[key]);
	}
	var obj = {
		fields: state.fields, // podemos sustituir todos los usos de fields por initialValues siempre que utilicemos redux-forms
		initialValues: decodedInitialValues
	};
	return obj;
};

/**
 * Connects our state,
 * our redux form and
 * our cookie provider
 * with out component
 */
export default connect(mapStateToProps)(reduxForm({
	validate: validate,
	form: 'budgetForm'
})(withCookies(SolicitarPresupuesto)));

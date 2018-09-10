import React, { Component } from 'react';
import { connect } from 'react-redux';

class SolicitarPresupuesto extends Component {
	constructor(props) {
        super(props);
	}
	
	onFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div id="ql-quotation-request" className="col-lg-7 col-md-7 col-12">
				<div id="ql-form-container" className="form-40pct form-rick-40pct  header-container">
					<form onSubmit={this.onFormSubmit} action="//localhost/nuevo?source_page=quotation-showList#" method="post" id="ql-form" className="step-1 max-1 lang-es bg-light border" data-trackid="ProcesoSolicitud">
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
							<div className="step col-12" data-step-name="location" style={{ display: 'block' }}>
								<input name="step_fields" id="step_fields" value="location_id,zip" type="hidden" />
								<div className="fields">
									<label className="title-label mb-5" for="zip">¿Dónde quieres realizar el trabajo?</label>
									<div className="form-field form-group p_zip  ">
										<label id="zip-label" for="zip">Código postal</label>
										<div className="row">
											<div className="col-sm-6 col-12 one-line-height">
												<input id="zip" name="zip" size="6" className="form-control" autocomplete="nope" type="text" />&nbsp;
											</div>
										</div>
									</div>
									
								</div>
							</div>
							<div className="step col-12" data-step-name="categories" style={{ display: 'none' }}>
								<input name="step_fields" id="step_fields" value="category_id" type="hidden" />
								<div className="fields">
									<div className="form-field form-group responsive_select" data-original-title="" title="">
										<label className="title-label" for="subcategory" id="category_id">¿A qué categoría corresponde el trabajo?:</label>
										<div className="input-container">
											<select id="subcategory" name="subcategory" className="form-control">
												<option value="">Selecciona una categoría</option>
												<optgroup label="Construcción">
													<option value="002-22">Construcción Casas</option>
													<option value="002-145">Construcción Casas Prefabricadas</option>
													<option value="002-148">Construcción Garajes</option>
													<option value="002-149">Construcción Instalaciones Deportivas</option>
													<option value="002-151">Construcción Muros</option>
													<option value="002-152">Construcción Naves Industriales</option>
													<option value="002-50">Construcción Piscinas</option>
													<option value="002-154">Derribos</option>
													<option value="002-155">Excavaciones</option>
												</optgroup>
												<optgroup label="Reforma">
													<option value="002-12">Reformas Baños</option>
													<option value="002-11">Reformas Cocinas</option>
													<option value="002-13">Reformas Comunidades</option>
													<option value="002-17">Reformas Locales Comerciales</option>
													<option value="002-20">Reformas Naves Industriales</option>
													<option value="002-18">Reformas Oficinas</option>
													<option value="002-157">Reformas Piscinas</option>
													<option value="002-10">Reformas Viviendas</option>
													<option value="002-21">Rehabilitación edificios</option>
													<option value="002-14">Rehabilitación Fachadas</option>
												</optgroup>
												<optgroup label="Mudanzas">
													<option value="002-140">Guardamuebles</option>
													<option value="002-136">Mudanzas Oficinas</option>
													<option value="002-134">Mudanzas Viviendas</option>
												</optgroup>
												<optgroup label="Técnicos">
													<option value="002-1">Arquitectos</option>
													<option value="002-2">Arquitectos Técnicos</option>
													<option value="002-181">Certificaciones Energéticas</option>
													<option value="002-57">Decoradores</option>
													<option value="002-3">Delineantes</option>
													<option value="002-8">Geólogos</option>
													<option value="002-58">Ingenieros</option>
													<option value="002-161">Inspección Técnica Edificios ITE</option>
													<option value="002-160">Licencias</option>
													<option value="002-56">Paisajistas</option>
													<option value="002-7">Peritos</option>
													<option value="002-55">Topógrafos</option>
												</optgroup>
												<optgroup label="Obras Menores">
													<option value="002-44">Aislamiento</option>
													<option value="002-28">Albañiles</option>
													<option value="002-124">Armarios</option>
													<option value="002-36">Carpintería Aluminio</option>
													<option value="002-37">Carpintería Metálica</option>
													<option value="002-116">Carpintería PVC</option>
													<option value="002-35">Carpinteros</option>
													<option value="002-40">Cerrajeros</option>
													<option value="002-39">Cristaleros</option>
													<option value="002-30">Fontaneros</option>
													<option value="002-177">Hormigón Impreso</option>
													<option value="002-15">Impermeabilizaciones</option>
													<option value="002-45">Insonorización</option>
													<option value="002-43">Marmolistas</option>
													<option value="002-175">Microcemento</option>
													<option value="002-41">Parquetistas</option>
													<option value="002-176">Pavimentos Continuos</option>
													<option value="002-33">Pintores</option>
													<option value="002-68">Pladur</option>
													<option value="002-121">Poceros</option>
													<option value="002-123">Tapiceros</option>
													<option value="002-118">Tejados</option>
													<option value="002-122">Trabajos Verticales</option>
													<option value="002-34">Yeseros</option>
												</optgroup>
												<optgroup label="Instaladores">
													<option value="002-66">Aire Acondicionado</option>
													<option value="002-46">Alarmas</option>
													<option value="002-47">Antenas</option>
													<option value="002-54">Ascensores</option>
													<option value="002-65">Calefacción</option>
													<option value="002-83">Chimeneas</option>
													<option value="002-64">Contra Incendios</option>
													<option value="002-53">Domótica</option>
													<option value="002-32">Electricistas</option>
													<option value="002-31">Gas</option>
													<option value="002-114">Placas Solares</option>
													<option value="002-119">Porteros Automáticos</option>
													<option value="002-120">Puertas Garaje</option>
													<option value="002-51">Rótulos</option>
													<option value="002-62">Toldos</option>
												</optgroup>
												<optgroup label="Mantenimiento">
													<option value="002-82">Control Plagas</option>
													<option value="002-81">Fosas Sépticas</option>
													<option value="002-9">Jardineros</option>
													<option value="002-77">Limpieza</option>
													<option value="002-141">Manitas</option>
													<option value="002-128">Mantenimiento Ascensores</option>
													<option value="002-164">Mantenimiento Comunidades</option>
													<option value="002-129">Mantenimiento Piscinas</option>
													<option value="002-178">Pulir Suelos</option>
												</optgroup>
												<optgroup label="Tiendas">
													<option value="002-180">Alquiler Maquinaria y Herramientas</option>
													<option value="002-96">Electrodomésticos</option>
													<option value="002-126">Materiales Construcción</option>
													<option value="002-95">Muebles</option>
												</optgroup>
											</select>
										</div>
									</div>
									<div id="subsubcategory-container" className="form-field form-group hidden">
										<label for="work_type" id="subcategory">Tipo de trabajo:</label>
										<div>
											<div className="radios checkbox-group">
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="dynamic-questions-container"></div>
							<div id="ondemand-questions-container"></div>
							<div id="static-questions-container"></div>
							<div id="estimated-date-step" className="step col-12" data-step-name="date" style={{ display: 'none' }}>
								<input name="step_fields" id="step_fields" value="estimated_date" type="hidden" />
								<div className="fields">
									<div className="form-field form-group responsive_select" id="p_estimated_date" data-original-title="" title="">
										<label className="title-label" for="estimated_date">¿Cuándo quieres realizar el trabajo?</label>
										<div className="input-container">
											<div className="radios checkbox-group" id="estimated_date" name="estimated_date" />
											<div className="col-lg-12">
												<input name="estimated_date" value="ASAP" id="estimated_date_ASAP" type="radio" />
												<label className="button-label" for="estimated_date_ASAP">
													Lo antes posible</label>
											</div>
											<div className="col-lg-12">
												<input name="estimated_date" value="LESS_3M" id="estimated_date_LESS_3M" type="radio" />
												<label className="button-label" for="estimated_date_LESS_3M">
													De 1 a 3 meses</label>
											</div>
											<div className="col-lg-12">
												<input name="estimated_date" value="MORE_3M" id="estimated_date_MORE_3M" type="radio" />
												<label className="button-label" for="estimated_date_MORE_3M">
													Más de 3 meses</label>
											</div>
											<div className="col-lg-12">
												<input name="estimated_date" value="NO_PLANNED" id="estimated_date_NO_PLANNED" type="radio" />
												<label className="button-label" for="estimated_date_NO_PLANNED">
													De momento no tengo pensado hacerlo</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="description-step" className="step col-12" data-step-name="description" style={{ display: 'none' }}>
							<div className="fields">
								<input name="step_fields" id="step_fields" value="description" type="hidden" />
								<div className="form-field form-group">
									<label className="title-label" for="description">Cuéntanos más detalles sobre el trabajo, si quieres</label>
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
						<div className="step col-12 info-step" data-step-name="contact_details" style={{ display: 'none' }}>
							<input name="step_fields" id="step_fields" value="contact_name,contact_mail,contact_phone,phone_provider,phone_type,referrer,newsletter_subscribe,contact_phone_secondary" type="hidden" />
							<div className="fields info-fields">
								<label className="title-label" for="zip">Tus datos de contacto</label>
								<div className="form-field form-group p_name">
									<label className="" for="contact_name">Tu nombre</label>
									<div className="">
										<input id="contact_name" className="full-width fb-input-name form-control" name="name" value="" autocomplete="nope" type="text" />
									</div>
								</div>
								<div className="form-field form-group p_email" data-original-title="" title="">
									<label className="" for="email">E-mail</label>
									<div className="">
										<input id="contact_mail" className="full-width fb-input-email form-control" name="email" value="" autocomplete="nope" type="text" />
									</div>
								</div>
								<div className="form-field form-group p_phone_1" data-original-title="" title="">
									<label className="" for="phone">Teléfono</label>
									<div id="contact-phone-container">
										<input id="contact_phone" name="phone" className="full-width form-control" value="" autocomplete="nope" type="text" />
									</div>
								</div>
								<p id="quality-advise" className="m-text hidden">
									Los profesionales pagan una cuota por acceder a tu solicitud. Por favor, asegúrate de que la información facilitada es correcta.
						</p>
								<div className="form-field form-group referrer hidden" data-original-title="" title="">
									<label className="" for="referrer">¿Cómo nos has conocido?</label>
									<div className="">
										<select id="referrer" name="referrer" className="form-control">
											<option value="">Seleccionar</option>
											<option value="0">Conocido</option>
											<option value="1">Otro sitio web</option>
											<option value="2">Google</option>
											<option value="3">Buzoneo</option>
											<option value="4">Internet</option>
											<option value="5">Brico Dépôt</option>
											<option value="6">Email</option>
											<option value="7">Facebook</option>
											<option value="8">Radio</option>
											<option value="9">TV</option>
											<option value="10">Youtube</option>
											<option value="11">Periódico</option>
											<option value="12">Revista</option>
											<option value="13">Transporte público</option>
											<option value="14">Valla publicitaria</option>
											<option value="15">Otro</option>
										</select>
									</div>
								</div>
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
								<a href="javascript:void(0)" id="previous-step" className="back btn-link" style={{ display: 'none' }}>« Volver</a>
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
}

function mapStateToProps(state) {
	return {
		fields : state.fields
	}
}

export default connect(mapStateToProps)(SolicitarPresupuesto);

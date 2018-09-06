

<div id="ql-quotation-request" class="col-lg-7 col-md-7 col-xs-12">
	<div id="ql-form-container" class="form-40pct form-rick-40pct  header-container">
		<form action="https://www.habitissimo.es/presupuestos/nuevo?source_page=quotation-showList#" method="post" id="ql-form" class="step-1 max-1 lang-es" data-trackid="ProcesoSolicitud">
			<i class="icon icon-spinner icon-spin hidden"></i>
			<a name="form"></a>
			<header class="quotation-form-header clearfix">
				<h2 class="t-m text-semibold">
					Solicita presupuestos                    <small>¡Es gratis!</small>
				</h2>
			</header>
			<div class="steps row" id="steps">
				<div class="progress-container ">
					<div class="col-lg-12 col-md-12">
						<div class="clearfix">
							<div class="progress hab-progress-bar unique quotation-progress low">
								<div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="1" style="width: 20%;">
									<span class="sr-only">1%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="step col-xs-12" data-step-name="location" style="display: block;">
					<input name="step_fields" id="step_fields" value="location_id,zip" type="hidden">
					<div class="fields">
						<label class="title-label" for="zip">¿Dónde quieres realizar el trabajo?</label>
						<div class="form-field form-group p_zip  ">
							<label id="zip-label" for="zip">Código postal</label>
							<div class="row">
								<div class="col-sm-6 col-xs-12 one-line-height">
									<input id="zip" name="zip" size="6" class="form-control" autocomplete="nope" type="text">&nbsp;
								</div>
								<small class="col-sm-6 col-xs-12" data-action="search-zip"><a class="raquo" href="javascript:void(0)" id="show_location_data">¿No lo recuerdas?</a> </small>
							</div>
						</div>
						<div id="location_fields" class="hidden" style="display: none;">
							<div class="form-field form-group p_state responsive_select" data-original-title="" title="">
								<label id="state-label" for="state">Provincia</label>
								<div>
									<select id="state" name="state" class="form-control">
										<option value="">Selecciona una provincia</option>
										<option value="6392">A Coruña</option>
										<option value="6382">Álava</option>
										<option value="6375">Albacete</option>
										<option value="6372">Alicante</option>
										<option value="6361">Almería</option>
										<option value="6401">Andorra</option>
										<option value="6376">Asturias</option>
										<option value="6393">Ávila</option>
										<option value="6387">Badajoz</option>
										<option value="6356">Barcelona</option>
										<option value="6383">Burgos</option>
										<option value="6399">Cáceres</option>
										<option value="6364">Cádiz</option>
										<option value="6367">Cantabria</option>
										<option value="6374">Castellón</option>
										<option value="6350">Ceuta</option>
										<option value="6366">Ciudad Real</option>
										<option value="6365">Córdoba</option>
										<option value="6388">Cuenca</option>
										<option value="6396">Girona</option>
										<option value="6352">Granada</option>
										<option value="6363">Guadalajara</option>
										<option value="6390">Guipúzcoa</option>
										<option value="6384">Huelva</option>
										<option value="6385">Huesca</option>
										<option value="6359">Illes Balears</option>
										<option value="6354">Jaén</option>
										<option value="6391">La Rioja</option>
										<option value="6389">Las Palmas</option>
										<option value="6394">León</option>
										<option value="6397">Lleida</option>
										<option value="6355">Lugo</option>
										<option value="6358">Madrid</option>
										<option value="6395">Málaga</option>
										<option value="6351">Melilla</option>
										<option value="6362">Murcia</option>
										<option value="6378">Navarra</option>
										<option value="6377">Ourense</option>
										<option value="6368">Palencia</option>
										<option value="6370">Pontevedra</option>
										<option value="6400">Salamanca</option>
										<option value="6373">Santa Cruz de Tenerife</option>
										<option value="6381">Segovia</option>
										<option value="6379">Sevilla</option>
										<option value="6369">Soria</option>
										<option value="6386">Tarragona</option>
										<option value="6357">Teruel</option>
										<option value="6360">Toledo</option>
										<option value="6353">Valencia</option>
										<option value="6398">Valladolid</option>
										<option value="6349">Vizcaya</option>
										<option value="6380">Zamora</option>
										<option value="6371">Zaragoza</option>
									</select>
								</div>
							</div>
							<div class="form-field form-group p_city responsive_select" data-original-title="" title="">
								<label class="" for="city">Población</label>
								<div class="">
									<select id="city" name="city" class="location_id form-control">
										<option value="">Selecciona una población</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="step col-xs-12" data-step-name="categories" style="display: none;">
					<input name="step_fields" id="step_fields" value="category_id" type="hidden">
					<div class="fields">
						<div class="form-field form-group responsive_select" data-original-title="" title="">
							<label class="title-label" for="subcategory" id="category_id">¿A qué categoría corresponde el trabajo?:</label>
							<div class="input-container">
								<select id="subcategory" name="subcategory" class="form-control">
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
						<div id="subsubcategory-container" class="form-field form-group hidden">
							<label for="work_type" id="subcategory">Tipo de trabajo:</label>
							<div>
								<div class="radios checkbox-group">
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="dynamic-questions-container"></div>
				<div id="ondemand-questions-container"></div>
				<div id="static-questions-container"></div>
				<div id="estimated-date-step" class="step col-xs-12" data-step-name="date" style="display: none;">
					<input name="step_fields" id="step_fields" value="estimated_date" type="hidden">
					<div class="fields">
						<div class="form-field form-group responsive_select" id="p_estimated_date" data-original-title="" title="">
							<label class="title-label" for="estimated_date">¿Cuándo quieres realizar el trabajo?</label>
							<div class="input-container">
								<div class="radios checkbox-group" id="estimated_date" name="estimated_date">
									<div class="col-lg-12">
										<input name="estimated_date" value="ASAP" id="estimated_date_ASAP" type="radio">
										<label class="button-label" for="estimated_date_ASAP">
										Lo antes posible</label>
									</div>
									<div class="col-lg-12">
										<input name="estimated_date" value="LESS_3M" id="estimated_date_LESS_3M" type="radio">
										<label class="button-label" for="estimated_date_LESS_3M">
										De 1 a 3 meses</label>
									</div>
									<div class="col-lg-12">
										<input name="estimated_date" value="MORE_3M" id="estimated_date_MORE_3M" type="radio">
										<label class="button-label" for="estimated_date_MORE_3M">
										Más de 3 meses</label>
									</div>
									<div class="col-lg-12">
										<input name="estimated_date" value="NO_PLANNED" id="estimated_date_NO_PLANNED" type="radio">
										<label class="button-label" for="estimated_date_NO_PLANNED">
										De momento no tengo pensado hacerlo</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="description-step" class="step col-xs-12" data-step-name="description" style="display: none;">
					<div class="fields">
						<input name="step_fields" id="step_fields" value="description" type="hidden">
						<div class="form-field form-group">
							<label class="title-label" for="description">Cuéntanos más detalles sobre el trabajo, si quieres</label>
							<div class="input-container">
								<textarea rows="6" cols="30" name="description" class="form-control" id="description" placeholder="Si lo deseas, puedes dar más detalles del trabajo que necesitas para que los profesionales sean más precisos a la hora de pasarte presupuesto. No incluyas ningún dato de contacto."></textarea>
							</div>
						</div>
					</div>
					<div class="fields">
						<script src="https://www.habitissimo.es/components/plupload/js/plupload.full.min.js"></script>
						<div class="upload-photo-button">
							<div id="pictures" class="row">
								<div class="col-md-12 form-group clearfix">
									<ul class="clearfix">
									</ul>
								</div>
							</div>
							<div class="row question-form-more">
								<div class="col-xs-12 question-form-photos text-center">
									<div id="upload-picture" title="" class="btn btn-lg btn-default btn-icon" style="position: relative; z-index: 1;">
										<i class="icon icon-camera-o icon-lg"></i>
										Adjuntar fotografías        <span class="muted">(si quieres)</span>
									</div>
									<div id="html5_1cmn7aof8adb28jlct17vl1kuk3_container" class="moxie-shim moxie-shim-html5" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px; overflow: hidden; z-index: 0;"><input id="html5_1cmn7aof8adb28jlct17vl1kuk3" style="font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" multiple="" accept="image/jpeg,image/png,image/gif,image/bmp" type="file"></div>
								</div>
							</div>
							<input name="images" type="hidden">
						</div>
						<script> 
							jQuery(function ($) {
							
							  if (typeof plupload === 'undefined') return;
							
							  $('body').on('click', '#pictures a.remove', function() {
							    var pictureId = $(this).data('image-id');
							    $(this).closest('li').hide('fast', function() {
							      $('input[name="images"]').val($('input[name="images"]').val().replace(pictureId + ',',''));
							      $(this).remove();
							    });
							  });
							
							  var photoUploader = new plupload.Uploader({
							    runtimes: 'html5,html4,flash,gears,silverlight,browserplus',
							    url: 'https://www.habitissimo.es/upload/new_image',
							    browse_button : 'upload-picture',
							    required_features: "send_browser_cookies",
							    filters : [ Hab.config.plupload.filters.img ],
							    max_file_size : Hab.config.plupload.max_file_size,
							    headers: Hab.config.plupload.headers
							  });
							
							  
							  photoUploader.init();
							
							  photoUploader.bind('FilesAdded', function(uploader, files) {
							      var maxImages = false;
							      var totalImagesAdded = $('#pictures li').length;
							    $.each(files, function(i, file) {
							        if (totalImagesAdded < 14){
							
							
							          var $li = $('<li>').addClass('uploading').attr('id', 'upload-' + file.id).hide();
							          $li.append('<i class="icon icon-refresh icon-spin"></i>');
							          $('#pictures ul').append($li);
							          $li.show('fast');
							          totalImagesAdded++;
							        }else{
							          maxImages = true;
							        }
							    });
							    if (maxImages){
							        alert("M\u00e1ximo 14 fotograf\u00edas. Se han cargado las primeras 14 fotograf\u00edas.");
							    }
							    $('#pictures').show();
							    uploader.start();
							    uploader.refresh();
							  });
							
							  photoUploader.bind('FileUploaded', function(up, file, res) {
							    try {
							
							      if ($('#upload-' + file.id).length) {
							        var info = $.parseJSON(res.response);
							        if (info) {
							
							          var img = new Image;
							          img.onload = function () {
							            $('#upload-' + file.id).empty()
							              .append('<img src="' + info.thumbnail_url + '"/>')
							              .append('<a class="remove" title="Quitar" data-image-id="' + info.id + '">&times;</a>')
							              .removeClass('uploading');
							            $('input[name="images"]').val($('input[name="images"]').val() + info.id + ',');// = $('#images').val() + file.id + ',';
							          };
							          img.onerror = function () {
							            alert("Error cargando las fotograf\u00edas, por favor vuelva a intentarlo.");
							          };
							        }
							        setTimeout(function () {
							          img.src = info.thumbnail_url;
							        }, 100);
							      }
							    } catch (e) {
							    }
							  });
							});
						</script>
					</div>
				</div>
				<div class="step col-xs-12 info-step" data-step-name="contact_details" style="display: none;">
					<input name="step_fields" id="step_fields" value="contact_name,contact_mail,contact_phone,phone_provider,phone_type,referrer,newsletter_subscribe,contact_phone_secondary" type="hidden">
					<div class="fields info-fields">
						<label class="title-label" for="zip">Tus datos de contacto</label>
						<div class="form-field form-group p_name">
							<label class="" for="contact_name">Tu nombre</label>
							<div class="">
								<input id="contact_name" class="full-width fb-input-name form-control" name="name" value="" autocomplete="nope" type="text">
							</div>
						</div>
						<div class="form-field form-group p_email" data-original-title="" title="">
							<label class="" for="email">E-mail</label>
							<div class="">
								<input id="contact_mail" class="full-width fb-input-email form-control" name="email" value="" autocomplete="nope" type="text">
							</div>
						</div>
						<div class="form-field form-group p_phone_1" data-original-title="" title="">
							<label class="" for="phone">Teléfono</label>
							<div id="contact-phone-container">
								<input id="contact_phone" name="phone" class="full-width form-control" value="" autocomplete="nope" type="text">
							</div>
						</div>
						<p id="quality-advise" class="m-text hidden">
							Los profesionales pagan una cuota por acceder a tu solicitud. Por favor, asegúrate de que la información facilitada es correcta.            
						</p>
						<div class="form-field form-group referrer hidden" data-original-title="" title="">
							<label class="" for="referrer">¿Cómo nos has conocido?</label>
							<div class="">
								<select id="referrer" name="referrer" class="form-control">
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
						<div class="row">
							<div class="col-xs-12 terms-column">
								<div class="form-field form-group p_terms">
									<div class="check-field">
										<label>
										<input name="terms_and_conditions" id="terms_and_conditions" type="checkbox">       He leído y acepto la Política de Privacidad y Condiciones que se presenta <a target="_blank" href="https://www.habitissimo.es/politica_de_privacidad">aquí</a>    </label>
									</div>
								</div>
								<div class="form-field form-group p_bulletin">
									<div class="check-field">
										<label>
										<input name="third_party" id="third_party" type="checkbox">      Deseo recibir comunicaciones comerciales de terceros    </label>
									</div>
								</div>
							</div>
						</div>
						<div class="clearfix alert notice notice_info">
							<i class="icon icon-info-circle-o"></i>
							<span class="msg">Comprueba que tus datos son correctos ya que <b>los profesionales pagan una cuota</b> para poder acceder a tu solicitud de presupuesto.</span>
						</div>
					</div>
				</div>
			</div>
			<div class="form-submit text-center" id="form-submit" style="display: block;">
				<input name="step" value="1" id="step" type="hidden">
				<input name="is-ondemand" value="0" id="is-ondemand" type="hidden">
				<input name="source_page" value="quotation-showList" id="source_page" type="hidden">
				<small class="form-step">
				<a href="javascript:void(0)" id="previous-step" class="back btn-link" style="display: none;">« Volver</a>
				</small>
				<button class="btn btn-primary btn-lg next ql-submit" id="next-step">Continuar »</button>
				<button class="btn btn-primary btn-lg next ql-submit" id="submit-quotation" style="display: none;">Solicitar presupuestos</button>
				<span class="text text-center">
				gratis y sin compromiso      </span>
			</div>
		</form>
	</div>
	<script>
		var QuotationStepForm = Class.extend({
		  init: function(formselector) {
		    this.form = $(formselector);
		    this.$progress_bar = this.form.find('.progress-bar');
		    this.is_form_enabled = true;
		    this.getSteps();
		
		    this.errors = {};
		
		    this.button_next                        = this.form.find('#next-step');
		    this.button_previous                    = this.form.find('#previous-step');
		    this.button_submit                      = this.form.find('#submit-quotation');
		    this.button_show_locations              = this.form.find('#show_location_data');
		    this.referrer                           = this.form.find('#referrer');
		    this.contact_name                       = this.form.find('#contact_name');
		    this.locations                          = this.form.find('#location_fields');
		    this.zip                                = this.form.find('#zip');
		    this.$category                          = this.form.find('[name="subcategory"]');
		    this.subcategory_container              = this.form.find('#subsubcategory-container');
		    this.subsubcategory_list                = this.form.find('#subsubcategory-container .radios');
		    this.state                              = this.form.find('#state');
		    this.city                               = this.form.find('#city');
		    this.textarea                           = this.form.find('#description');
		    this.spinner                            = $('.icon-spinner');
		    this.button_text                        = this.form.find('#form-submit .text');
		    this.dynamic_questions                  = {};
		    this.static_questions                   = {};
		    this.business_id                        = $('#business-select #business_id').val();
		    this.description_label_text             = this.form.find('#description-step .title-label').html();
		    this.description_placeholder            = this.form.find('#description-step textarea').attr('placeholder');
		    this.is_ondemand                        = false;
		    this.prevent_input_focus                = false;
		    this.from_home_searcher                 = false;
		    this.is_mobile_selector                 = false;
		    this.home_searcher_with_subsubcategory  = 0;
		    this.category_searcher                  = this.form.find('[name="category_searcher"]');
		    this.has_category_searcher              = false;
		    this.show_external_zip                  = false;
		    this.dynamic_question_container         = this.form.find('#dynamic-questions-container');
		    this.dynamic_question_seen              = 0;
		    this.steps_name_seen                    = {};
		    this.source_page                        = this.form.find('input[name=source_page]').val();
		    this.phone_type                         = this.form.find('input[name=phone_type]');
		    this.form_referrer                      = document.referrer;
		    this.is_rfq_with_subcategories_first_experiment =
		      false;
		    this.location_step_index                = (this.is_rfq_with_subcategories_first_experiment ? 2 : 1);
		    this.categories_step_index              = (this.is_rfq_with_subcategories_first_experiment ? 1 : 2);
		
		    if (this.category_searcher.length > 0) {
		      this.has_category_searcher = true;
		    }
		
		    if (this.home_searcher_with_subsubcategory) {
		      this.getDynamicAndStaticQuestions();
		    }
		
		    if (this.phone_type.length) {
		      $('#contact-phone-container').hide();
		    }
		
		    Mask.zip('#zip');
		    Mask.phone('#contact_phone');
		
		    this.bindEvents();
		
		    this.initHelp();
		
		    $(window).on('resize', this.initHelp.bind(this));
		
		    var step = 1;
		
		    this.showStep(step);
		
		          this.locations.hide();
		    
		    if(this.subsubcategory_list.html == ""){
		      this.subcategory_container.hide();
		    }
		
		    $('#is_private').on('change', function() {
		      $('#visibility').val($(this).is(':checked') ? 0 : 1);
		    });
		
		  },
		
		  getSteps: function() {
		    this.total_steps = this.form.find('.step').length;
		    this.$steps_container = this.form.find('#steps');
		
		    this.$steps = this.$steps_container.find('.step');
		
		    this.last_step = this.$steps.length;
		
		    if (this.seen_steps == null) {
		      this.seen_steps = 1;
		    }
		  },
		
		  getStep: function(step) {
		    return this.$steps.eq(step - 1);
		  },
		
		  getCurrentStep: function() {
		    return this.getStep(this.current_step);
		  },
		
		  onHashChange: function(ev) {
		    var hashStep = parseInt(document.location.hash.substr(1), 10);
		
		    if (isNaN(hashStep) || !isFinite(hashStep) || hashStep < 1 || hashStep > this.last_step) {
		      hashStep = 1;
		    } else {
		      ev.preventDefault();
		    }
		
		    if (
		      (
		        this.current_step > this.categories_step_index ||
		        hashStep > this.categories_step_index
		      ) &&
		      this.form.find('[name=subcategory]').val() === ''
		    ) {
		      this.current_step = this.categories_step_index;
		      this.seen_steps = 0;
		      this.showStep(this.categories_step_index);
		    }
		
		    if (this.current_step !== hashStep) {
		      this.showStep(hashStep);
		    }
		  },
		
		  updateHash: function() {
		    document.location.hash = '#' + this.current_step;
		  },
		
		  initHelp: function() {
		    var $form = this.form;
		    var width = $(window).width();
		
		    var showPopover = function(ev) {
		      var $del = $(ev.delegateTarget);
		          $form.find('.form-group').not($del).popover('hide');
		          $del.popover('show');
		
		          $(this).one('blur', function() {
		            $del.popover('hide');
		          });
		    };
		
		    $form.find('.help-block').each(function() {
		
		      var $this = $(this);
		
		      $this.closest('.form-group')
		        .popover({
		          content: $this.html(),
		          html: true,
		          trigger: 'manual',
		          container: '.header-container',
		          placement: function(popover, el) {
		            var width = $(window).width();
		
		            if ($('body.modal-open').length > 0) {
		              width = $this.find('.modal-content').width();
		            }
		
		            if (width > 973) {
		              return 'left';
		            }
		            return 'top';
		          }
		        })
		        .on('focus', ':input', showPopover);
		
		      $this.remove();
		
		    });
		
		    if (!this.prevent_input_focus) {
		      $form.find(':input:focus').trigger('focus');
		    }
		  },
		
		  bindEvents: function() {
		    $(window).bind('hashchange', this.onHashChange.bind(this));
		
		    var nextStep      = this.nextStep.bind(this);
		    var previousStep  = this.previousStep.bind(this);
		    var showCustomCallPreference = this.showCustomCallPreference;
		
		    this.button_next.add(this.button_submit)
		      .on('click', function(ev) {
		        ev.preventDefault();
		        nextStep();
		    });
		
		    this.button_previous.on('click', function(e) {
		      e.preventDefault();
		      previousStep();
		    });
		
		    if (!this.show_external_zip) {
		      this.button_show_locations.on('click', this.showLocations.bind(this));
		    } else {
		      this.button_show_locations.on('click', function() {
		        window.open(null);
		      });
		    }
		
		    this.$category.on('change', this.onSelectCategory.bind(this));
		    this.state.on('change', this.onSelectState.bind(this));
		
		    this.form.find('input[name=estimated_date]').change(nextStep);
		    this.form.find('input[name=budget]').change(nextStep);
		    this.form.find('input[name=work_type]').change(nextStep);
		
		    this.form.on('change', '[data-dynamic] :input:not([type=checkbox])', nextStep).bind(this);
		    this.form.on('change', '[data-auto-next] :input:not([type=checkbox])', nextStep).bind(this);
		
		    this.form.on('click', '.change-category', function(e) {
		      e.preventDefault();
		
		      // In this case, we want to go to the categories selector
		      if (this.is_rfq_with_subcategories_first_experiment) {
		        location.assign(this.form_referrer);
		      } else {
		        this.showStep(this.categories_step_index);
		      }
		
		    }.bind(this));
		
		    $('input:radio[name="call-preference"]').on('change', showCustomCallPreference);
		
		    
		    $('input:radio[name=phone_type]').on('change', function() {
		      $('#contact-phone-container').show();
		    });
		  },
		
		  disableForm: function() {
		    this.is_form_enabled = false;
		
		    this.button_submit.add(this.button_next)
		      .addClass('btn-spinner disabled')
		      .attr('disabled', true);
		  },
		
		  enableForm: function() {
		    this.is_form_enabled = true;
		
		    this.button_submit.add(this.button_next)
		      .removeClass('btn-spinner disabled')
		      .removeAttr('disabled');
		  },
		
		  nextStep: function() {
		    if (!this.is_form_enabled) {
		      return true;
		    }
		
		    this.disableForm();
		
		    this.steps_name_seen[this.current_step] = this.current_step_name;
		
		    var url  = '/p/api/quotation/validate_multisteps_quotation';
		    if (this.is_ondemand && this.getCurrentStep().find('input[name=work_type]').length == 0) {
		      url  = '/p/api/quotation/validate_multisteps_quotation_ondemand';
		    }
		
		    $.ajax( {
		      url:     url,
		      data:    this.getFormData(),
		      method:  'POST',
		      success: function(data) {
		        this.errors = data;
		
		        $terms_and_conditions = this.getCurrentStep().find('#terms_and_conditions');
		        if ($terms_and_conditions.length && ! $terms_and_conditions.is(':checked')) {
		          this.errors.terms_and_conditions = "Debes aceptar los términos y condiciones";
		        }
		
		        if (this.is_ondemand && this.getCurrentStep().find('#hours_0_morning').length != 0) {
		          $.each($('#preferred_date').val().split(','), function(index,value){
		            var hours_checked = ($("input[name='hours_" + index + "[]']:checked").length > 0);
		            if (!hours_checked) {
		              this.errors['hours_' + index] = "Debes seleccionar una preferencia de hora para la fecha";
		            }
		          }.bind(this));
		        }
		
		        if (this.is_ondemand && this.getCurrentStep().find('#ondemand_selected').length != 0) {
		          if (this.getCurrentStep().find('input[name=ondemand_selected]:checked').length == 0) {
		            this.errors.ondemand_selected = "SELECTION_REQUIRED";
		          }
		        }
		        // Note that we avoid enabling the form while submitting it
		        if ( !this.hasErrors() ) {
		          if (this.current_step >= this.last_step) {
		            this.sendGaEvent('STEP_OK', 'step:' + this.current_step_name);
		            this.submit();
		
		          } else {
		            this.sendGaEvent('STEP_OK', 'step:' + this.current_step_name);
		            this.scrollTo();
		            this.enableForm();
		            if (this.getCurrentStep().find('input[name=work_type]:checked').length > 0) {
		              this.getDynamicAndStaticQuestions();
		                            if (!this.business_id) {
		                this.getOnDemandQuestions();
		              }
		                          } else {
		              this.showNext();
		            }
		          }
		        } else {
		          this.scrollTo();
		          this.sendGaEvent('STEP_ERRORS', 'step:' + this.current_step_name);
		          this.enableForm();
		          this.renderInputErrors();
		        }
		      }.bind(this),
		
		      error: function() {
		        this.enableForm();
		      }.bind(this),
		
		      dataType:   'json'
		    } );
		  },
		
		  showNext: function() {
		    this.showStep(this.current_step + 1);
		  },
		
		  previousStep: function() {
		
		    if (this.is_rfq_with_subcategories_first_experiment && this.current_step <= 1) {
		      location.assign(this.form_referrer);
		    }
		
		    if (this.current_step <= 1) {
		      return;
		    }
		    var to_step = this.steps_name_seen[this.current_step - 1];
		    this.sendGaEvent('STEP_BACK', 'from:' + this.current_step_name + ' to:' + to_step);
		    this.showStep(this.current_step - 1);
		    this.scrollTo();
		
		    return false;
		  },
		
		  removeErrors: function() {
		    $(".error-container").remove();
		    $(".has-error").removeClass("has-error");
		  },
		
		  showStep: function(step) {
		    if (step == this.current_step) {
		      return
		    } else if (step < 1) {
		      step = 1;
		    } else if (step > this.last_step) {
		      step = this.last_step;
		    } else if (step > (this.seen_steps + 1)) {
		      step = this.seen_steps + 1;
		    }
		
		    this.button_submit.removeClass('hidden');
		
		    this.form.find('.help-block').removeClass('hidden');
		    this.$steps.hide().removeClass('hidden');
		
		    if ($('#steps-progress') != "undefined") {
		      $('#steps-progress').text("Paso %step% de %total_steps%".replace(/%step%/, step).replace(/%total_steps%/, this.last_step));
		    }
		
		    $('#form-submit').hide();
		
		    var $step = this.getStep(step);
		
		    $step.fadeIn('slow');
		
		    var $input = $step.find(':input:not(:checkbox,:radio,select,:hidden,textarea)');
		    var $inputsToSelect =  $step.find(':radio').length;
		    var $inputsSelected =  $step.find(':radio:checked').length;
		
		    if ($input.length > 0) {
		      if (!this.prevent_input_focus || (this.prevent_input_focus && this.current_step > 1)) {
		        $input.first().focus();
		      }
		      this.button_next.show();
		      this.button_text.show();
		    } else {
		      this.button_next.hide();
		      this.button_text.hide();
		    }
		
		    if (step < this.seen_steps) {
		      this.removeErrors();
		      this.button_next.removeClass('disabled').removeAttr('disabled');
		      this.button_next.show();
		      this.button_text.show();
		    }
		
		    if (step <= this.seen_steps || $step.hasClass('show-button')) {
		      this.button_next.removeClass('disabled').removeAttr('disabled');
		      this.button_next.show();
		      this.button_text.show();
		    }
		
		    if (this.is_rfq_with_subcategories_first_experiment) {
		      this.button_previous.toggle(step > 0);
		    } else {
		      this.button_previous.toggle(step > 1);
		    }
		    this.button_submit.toggle(step == this.last_step);
		
		    if(step >= this.last_step){
		      this.button_text.hide();
		      this.button_next.hide();
		    }
		
		    if (step == this.last_step) {
		      this.button_text.show();
		    }
		
		    if($inputsToSelect > 0 && $inputsSelected == 0) {
		      this.button_next.hide();
		      this.button_text.hide();
		    }
		
		    if (step != this.last_step) {
		     this.button_next.show();
		    }
		
		    $('#form-submit').show();
		
		    for (var i = 1; i <= this.last_step; i++) {
		      this.form.toggleClass('step-' + i, i === step);
		    }
		
		    this.updateDynamicQuestionSeen(step);
		
		    this.current_step_name = $step.data('step-name');
		
		    if (!this.isInDynamicQuestion(step) ||
		        this.isFirstDynamicQuestion()) {
		      this.sendTrackEvents();
		    }
		
		    this.current_step = step;
		    this.seen_steps = Math.max(step, this.seen_steps);
		
		    this.updateHash();
		
		    this.enableForm();
		
		    this.updateProgressBar();
		    if (
		      this.category_searcher.is(':visible') &&
		      this.category_searcher.categorySearcher('val') === ''
		    ) {
		      $('.typeahead-auto-focus').focus();
		      $('.typeahead-auto-focus').typeahead('open');
		    }
		
		    if (this.is_rfq_with_subcategories_first_experiment) {
		      this.setTitleOfStep();
		    }
		  },
		
		  sendGaEvent: function(action,label){
		        try {
		      dataLayer.push({
		        'event' : 'eventga',
		        'category' : 'landing_40pctb_dicard_modal',
		        'action' : action,
		        'label' : label
		      });
		    }catch(e){
		
		    }
		      },
		
		  sendTrackEvents: function(){
		                if (typeof dataLayer != "undefined") {
		        var url_virtual = '/landing_40pctb_dicard_modal/' + this.current_step_name;
		        dataLayer.push({'event': 'pageview', 'urlvirtual': url_virtual});
		      }
		            if (typeof ga != "undefined" && typeof _gaq != "undefined") {
		      var track_url = document.location.pathname.replace(/\/+$/, '') + '/landing_40pctb_dicard_modal/' + this.current_step_name;
		      ga('send', 'pageview', track_url);
		      _gaq.push(['_trackPageview', track_url]);
		      }
		      },
		
		  showLocations: function() {
		
		    this.zip.val('');
		    this.zip.attr('readonly', true);
		    this.zip.closest('.form-field').hide();
		
		    this.locations.removeClass('hidden');
		    this.locations.show();
		
		    return false;
		  },
		
		  isInDynamicQuestion: function(step) {
		    var $step = this.getStep(step);
		    var is_dynamic_question = $step.data('dynamic');
		
		    if (typeof is_dynamic_question === "undefined") {
		      return false;
		    }
		
		    return is_dynamic_question;
		  },
		
		  isFirstDynamicQuestion: function() {
		    return this.dynamic_question_seen === 1;
		  },
		
		  updateDynamicQuestionSeen: function(step) {
		    if (this.isInDynamicQuestion(step)) {
		      this.dynamic_question_seen++;
		    } else {
		      this.dynamic_question_seen = 0;
		    }
		  },
		
		  submit: function() {
		    this.disableForm();
		
		    if (this.is_ondemand) {
		      var url  = '/p/api/quotation/create_multisteps_quotation_ondemand?medium=landing_40pctb_dicard_modal';
		    } else {
		      var url  = '/p/api/quotation/create_multisteps_quotation?medium=landing_40pctb_dicard_modal';
		    }
		
		    
		    this.button_submit.prop('disabled', true);
		    var data = this.getFormData();
		    if (this.checkIfDynamicQuestionsHasKeys()) {
		      for (var k in this.dynamic_questions) {
		        data[k] = this.dynamic_questions[k];
		      }
		    }
		
		    if (Object.keys(this.static_questions).length > 0) {
		      for (index in this.static_questions) {
		        data[index] = this.static_questions[index];
		      }
		    }
		
		    
		    $.ajax({
		      url:        url,
		      data:       data,
		      dataType:   'json',
		      method:     'POST',
		      statusCode: {
		        201:    function(data) {
		          this.form.find('input').prop('disabled', true);
		          this.$steps_container.addClass('disabled');
		          this.button_previous.remove();
		
		                      try {
		              dataLayer.push({
		                'event' : 'eventgaCallback',
		                'category' : 'landing_40pctb_dicard_modal',
		                'action' : 'P3_SolicitarPresupuesto'
		              });
		            } catch (e) {
		            }
		          
		          setTimeout(function() {
		            window.location.href = data;
		          }, 500);
		
		        }.bind(this)
		      },
		      error: function(data) {
		        this.sendGaEvent('SUMBIT_ERRORS', 'step:' + this.current_step);
		        this.enableForm();
		      }.bind(this)
		
		    });
		
		    return false;
		  },
		
		  buildSubcategoriesHTML: function(list, categories) {
		    var substitute = function(str, sub) {
		      return str.replace(/\{(.+?)\}/g, function($0, $1) {
		        return $1 in sub ? sub[$1] : $0;
		      });
		    };
		
		    if (categories.length == 0) {
		      var $category = this.$category.find('option:selected'),
		          val = $category.val();
		
		      var $div = $('<div class="col-lg-12">'),
		          $label = $('<label class="button-label">').text($category.text()).attr('for', 'work_type_' + $category.id),
		          $input = $('<input type="radio" name="work_type" checked>')
		                   .attr({
		                     value: val,
		                     id: 'work_type_' + val
		                   });
		      $div.append($input);
		      $div.append($label);
		      list.append($div);
		
		      this.nextStep();
		
		    }  else {
		      for (var category, i = 0, l = categories.length; i <l; ++i) {
		        category = categories[i];
		        var $div = $('<div class="col-lg-12">'),
		            $label = $('<label class="button-label">').text(category.name).attr('for', 'work_type_' + category.id) ,
		            $input = $('<input type="radio" name="work_type">')
		                     .attr({
		                       value: category.id,
		                       id: 'work_type_' + category.id
		                     });
		
		        $div.append($input);
		        $div.append($label);
		        list.append($div);
		      }
		    }
		  },
		
		  onSelectCategory: function(event, suggestion) {
		    this.categoryText = $(event.target).find(':selected').html();
		    this.updateCategoryText(this.categoryText);
		
		    if (this.has_category_searcher) {
		      this.checkSubOrSubsubcategory(suggestion);
		    } else {
		      this.checkSubcategory($(event.target).val());
		    }
		  },
		
		  updateCategoryText: function(text) {
		    this.form.find('.category-text').text(text);
		  },
		
		  checkSubcategory: function(id) {
		    var list = this.subcategory_container.find('.radios').empty();
		    this.subcategory_container.addClass("hidden");
		
		    if (id) {
		      $.ajax( {
		        url: '/p/api/category/list/' + id,
		        data: {
		          zip: this.zip.val(),
		          city_id: this.city.val(),
		          order_by: 'times_published',
		        },
		        success:    function(data){
		          this.buildSubcategoriesHTML(list, data);
		          if (data.length === 0){
		            this.subcategory_container.hide();
		            this.subcategory_container.addClass("hidden");
		          } else {
		            this.subcategory_container.show();
		            this.subcategory_container.removeClass("hidden");
		          }
		         }.bind(this),
		        error: function() {
		          this.subcategory_container.hide();
		        },
		      });
		    } else {
		      this.subcategory_container.hide();
		    }
		  },
		
		  checkSubOrSubsubcategory: function(selected_element) {
		    var list = this.subcategory_container.find('.radios').empty();
		
		    this.subcategory_container.addClass("hidden");
		
		    var is_subsubcategory = /^003-\d+/.test(selected_element.id),
		        id = selected_element.id;
		
		    if (is_subsubcategory) {
		      id = selected_element.parent_id;
		    }
		
		    if (id) {
		      var city_id = $('#city').val();
		      $.ajax({
		        url: '/p/api/category/list/' + id,
		        data: {
		          zip: this.zip.val(),
		          city_id: this.city.val(),
		          order_by: 'times_published',
		        },
		        dataType: 'json',
		        success: function(data) {
		          this.buildSubcategoriesHTML(list, data);
		          if (data.length === 0){
		            this.subcategory_container.hide();
		            this.subcategory_container.addClass("hidden");
		          } else {
		            this.subcategory_container.show();
		            this.subcategory_container.removeClass("hidden");
		          }
		
		          if (is_subsubcategory) {
		            this.subcategory_container.find("[value=" + selected_element.id + "]").attr('checked', 'checked');
		            this.nextStep();
		          }
		        }.bind(this),
		        error: function() {
		          this.subcategory_container.hide();
		        }
		      });
		    } else {
		      this.subcategory_container.hide();
		    }
		  },
		
		  buildCities: function(cities) {
		    for (var city, i = 0, l = cities.length; i < l; ++i) {
		      city = cities[i];
		      var option = '<option value="' + city.id + '">' + city.name + '</option>';
		      $(this.city).append(option);
		    }
		
		    if (cities.length == 1) {
		      $(this.city).val(cities[0].id);
		    }
		
		    this.form.find('select[name=city]').change(this.nextStep.bind(this));
		  },
		
		  onSelectState: function(event) {
		    this.city.find('[value != ""]').remove();
		
		    if ($(event.target).val()) {
		      $.ajax( {
		        url:        '/p/api/location/list/' + $(event.target).val(),
		        success:    function(data){
		          this.buildCities(data);
		         }.bind(this),
		        dataType:   'json'
		      });
		    }
		  },
		
		  getFormData: function() {
		    var data = {
		      step                    : this.current_step,
		      step_fields             : this.getCurrentStep().find('#step_fields').val(),
		      description             : this.form.find('#description').val(),
		      referrer                : this.form.find('#referrer').val(),
		      phone_provider          : this.form.find('#phone_provider').val(),
		      phone_type              : this.form.find('input[name=phone_type]:checked').val(),
		      estimated_date          : this.form.find('input[name=estimated_date]:checked').val(),
		      budget_preference       : this.form.find('input[name=budget]:checked').val(),
		      category_id             : this.form.find('input[name=work_type]:checked').val(),
		      contact_name            : this.form.find('#contact_name').val(),
		      contact_mail            : this.form.find('#contact_mail').val(),
		      contact_phone           : this.form.find('#contact_phone').val(),
		      contact_phone_secondary : this.form.find('#contact_phone_secondary').val(),
		      call_preference         : this.form.find('input[name=call-preference]:checked').val(),
		      call_custom_preference  : this.form.find('#call-custom-preference').val(),
		      pictures                : this.form.find('input[name=images]').val(),
		      terms_and_conditions    : this.form.find('#terms_and_conditions').is(':checked'),
		      third_party             : this.form.find('#third_party').is(':checked'),
		      source_page             : this.form.find('input[name=source_page]').val()
		    };
		    data.location_id = this.city.val();
		    data.zip = this.form.find('#zip').val();
		
		    if (this.business_id) {
		      data.invited_business_id = this.business_id;
		      data.is_private = $('#business-select #visibility').val();
		    }
		
		    data.is_ondemand = this.is_ondemand;
		    var $ondemand_selected_input = $('input[name=ondemand_selected]'),
		        can_choose_regular_lead = $ondemand_selected_input.length > 1;
		
		    if (data.is_ondemand) {
		      data.type_of_place      = $('input[name=type_of_place]:checked').val();
		      data.age_of_place       = $('input[name=age_of_place]:checked').val();
		      data.no_preferred_date  = $('#no_preferred_date').is(':checked');
		      data.preferred_date     = $('#preferred_date').val();
		      data.ondemand_selected  = !can_choose_regular_lead || $ondemand_selected_input.filter(':checked').val() == 1;
		
		      if ($('#preferred_date').val()) {
		        var dates = $('#preferred_date').val().split(',');
		
		        dates.sort(function(x, y){
		          var date_x = new Date(x.split("/")[0], x.split("/")[1] - 1, x.split("/")[2]);
		          var date_y = new Date(y.split("/")[0], y.split("/")[1] - 1, y.split("/")[2]);
		          return date_x - date_y;
		        })
		
		        data['hours'] = [];
		        $.each(dates, function(index,value){
		          var hours = [];
		          $("input[name='hours_" + index + "[]']:checked").each( function (i,element) {
		            hours.push($(element).val());
		          });
		          data['hours'].push(hours.join());
		        });
		      } else {
		        data['preferred_hour'] = [];
		        $("input[name='preferred_hour[]']:checked").each( function (i,element) {
		          data['preferred_hour'].push($(element).val());
		        });
		      }
		
		      data.date_preference_explanation = $('#date_preference_explanation').val();
		      data.call_preference_time = $('input[name=call_preference]:checked').val();
		
		      delete data.budget_preference;
		      delete data.estimated_date;
		    }
		
		      if (this.getCurrentStep().data('dynamic') != null) {
		
		        var questionData = this.getCurrentStep().find(':input:not([type=hidden])').serializeArray();
		        $.each(questionData, function(i, obj)  {
		          if (!obj.name.match(/\[\]$/)) {
		            if (this.dynamic_questions.hasOwnProperty(obj.name)) {
		              this.dynamic_questions[obj.name] = obj.value;
		              data[obj.name] = obj.value;
		            } else if (this.static_questions.hasOwnProperty(obj.name)) {
		              this.static_questions[obj.name] = obj.value;
		              data[obj.name] = obj.value;
		            }
		          }else {
		            if (typeof data[obj.name] === 'undefined' || data[obj.name].length < 1) {
		              data[obj.name] = [];
		            }
		            if (!this.dynamic_questions.hasOwnProperty(obj.name)) {
		              this.dynamic_questions[obj.name] = [];
		            }
		            data[obj.name].push(obj.value);
		            this.dynamic_questions[obj.name].push(obj.value);
		
		          }
		        }.bind(this));
		      }
		
		    return data;
		  },
		
		  renderErrorExceptions: function(field) {
		    var error_html = '<div class="error-container"><span class="control-label form_error" id="' + field + '_error">' + this.translateError(this.errors[field],field) + '</span></div>';
		
		    if (field == 'category_id' && this.subcategory_container.is(':visible')) {
		
		      if (this.is_rfq_with_subcategories_first_experiment) {
		        this.subcategory_container.before(error_html);
		      } else {
		        this.subcategory_container.find('label').first().after(error_html);
		      }
		
		      this.subcategory_container.addClass('has-error');
		      this.sendGaEvent('FIELD_ERROR', 'step ' + this.current_step_name + ': subcategory');
		
		      return true;
		    } else if (field == 'category_id') {
		      this.form.find('#show-modal-categories').closest('.form-field').prepend(error_html);
		      this.form.find('#show-modal-categories').closest('.form-field').addClass('has-error');
		
		      this.form.find('#' + field).closest('.form-field').find('label').first().after(error_html);
		      this.form.find('#' + field).closest('.form-field').addClass('has-error');
		      this.sendGaEvent('FIELD_ERROR', 'step ' + this.current_step_name + ': category');
		
		      return true;
		    }
		
		    if (field == 'location_id') {
		      if (this.form.find('#state').val()) {
		        //this.form.find('#city').closest('.form-field').prepend(error_html);
		        this.form.find('#city').closest('.form-field').find('label').first().after(error_html);
		        this.form.find('#city').closest('.form-field').addClass('has-error');
		        this.sendGaEvent('FIELD_ERROR', 'step ' + this.current_step_name + ': city');
		      } else {
		        //this.form.find('#state').closest('.form-field').prepend(error_html);
		        this.form.find('#state').closest('.form-field').find('label').first().after(error_html);
		        this.form.find('#state').closest('.form-field').addClass('has-error');
		        this.sendGaEvent('FIELD_ERROR', 'step ' + this.current_step_name + ': state');
		      }
		      return true;
		    }
		
		    if (field == 'terms_and_conditions') {
		      error_html = '<div class="error-container"><span class="control-label form_error" id="' + field + '_error">' + this.errors[field] + '</span></div>';
		      this.form.find('#terms_and_conditions').closest('.form-field').prepend(error_html).addClass('has-error');
		      this.sendGaEvent('FIELD_ERROR', 'step ' + this.current_step_name + ': terms_and_conditions');
		      return true;
		    }
		
		    if (field == 'no_preferred_date') {
		      this.form.find('#' + field).closest('.form-field').prepend(error_html);
		      this.form.find('#' + field).closest('.form-field').addClass('has-error');
		      this.sendGaEvent('FIELD_ERROR', 'step ' + this.current_step_name + ':' + field);
		      return true;
		    }
		
		    if (field.substr(0,6) == "hours_") {
		      error_html = '<div class="error-container"><span class="control-label form_error" id="' + field + '_error">' + this.errors[field] + '</span></div>';
		      this.form.find('#' + field).closest('.form-field').prepend(error_html);
		      this.form.find('#' + field).closest('.form-field').addClass('has-error');
		      this.sendGaEvent('FIELD_ERROR', 'step ' + this.current_step_name + ':' + field);
		
		      return true;
		    }
		
		    if (field == 'ondemand_selected') {
		      this.form.find('#' + field).closest('.form-field').prepend(error_html);
		      this.form.find('#' + field).closest('.form-field').addClass('has-error');
		      this.sendGaEvent('FIELD_ERROR', 'step ' + tthis.current_step_name + ':' + field);
		      return true;
		    }
		
		    return false;
		  },
		
		  renderInputErrors: function() {
		    this.form.find('.error-container').remove();
		    this.form.find('.has-error').removeClass('has-error');
		    this.form.find('.has-errors').removeClass('has-errors');
		    var field, error_html;
		    for (field in this.errors) {
		      if (this.errors.hasOwnProperty(field)) {
		        if (!this.renderErrorExceptions(field)) {
		          this.sendGaEvent('FIELD_ERROR', 'step ' + this.current_step_name + ': ' + field);
		
		          var error_html = $('<div>', { class: 'error-container' })
		            .append($('<span>', {
		              class: 'control-label form_error',
		              id: field + '_error',
		              text: this.translateError(this.errors[field], field)
		            }))
		
		          var $form_field = this.form.find('#' + field).closest('.form-field');
		
		          if (this.is_rfq_with_subcategories_first_experiment) {
		            var $input_label = $form_field.find('.input-label');
		            if ($input_label.length) {
		              $input_label.first().after(error_html);
		            } else {
		              $form_field.before(error_html);
		            }
		          } else {
		            $form_field.find('label').first().after(error_html);
		          }
		
		          $form_field.addClass('has-error');
		        }
		      }
		    }
		
		    if (this.is_rfq_with_subcategories_first_experiment) {
		      var $first_error_field = this.form.find('.has-error').first();
		      HabUtils.scrollTo($first_error_field[0]);
		    }
		  },
		
		  translateError: function(error, field) {
		    var message = '';
		    var error_messages = {
		      "_DEFAULT"                         : "Valor incorrecto",
		      "REQUIRED"                         : "Debes rellenar este campo",
		      "FIELD_REQUIRED"                   : "Debes rellenar este campo",
		      "SELECTION_REQUIRED"               : "Debes seleccionar una opci\u00f3n",
		      "FIELDS_REQUIRED"                  : "Debes rellenar este campo",
		      "INVALID_CHOICE"                   : "No es una opci\u00f3n v\u00e1lida",
		      "NOT_STRING"                       : "Valor no v\u00e1lido",
		      "INVALID_CATEGORY"                 : "Categor\u00eda no v\u00e1lida",
		      "INVALID_LOCATION"                 : "Poblaci\u00f3n no v\u00e1lida",
		      "INVALID_EMAIL"                    : "No es un email v\u00e1lido",
		      "INVALID_EMAIL_BUSINESS"           : "Este email pertenece a una empresa, por favor introduce otro",
		      "INVALID_ZIP"                      : "No es un c\u00f3digo postal v\u00e1lido",
		      "INVALID_PHONE"                    : "No es un tel\u00e9fono v\u00e1lido",
		      "INVALID_MOBILE_WITH_SELECTOR"     : " - 600088880",
		      "INVALID_LANDLINE_WITH_SELECTOR"   : " - ",
		      "STRING_TOO_SHORT_DESCRIPTION"     : "La descripci\u00f3n debe contener al menos 30 caracteres",
		      "INVALID_CHOICE_ESTIMATED_DATE"    : "Debes rellenar este campo",
		      "INVALID_CHOICE_BUDGET_PREFERENCE" : "Debes rellenar este campo",
		      "FIELDS_REQUIRED_NO_PREFERRED_DATE" : "Si no tienes preferencia de fecha selecciona esta opci\u00f3n",
		    };
		
		    if (error_messages[error + '_' + field.toUpperCase()]) {
		      message = error_messages[error + '_' + field.toUpperCase()];
		    } else if (error_messages[error]) {
		      message = error_messages[error];
		    } else if (error_messages[error[0][0] + '_' + field.toUpperCase()]) {
		      message = error_messages[error[0][0] + '_' + field.toUpperCase()];
		    } else if (error_messages[error[0][0]]) {
		      message = error_messages[error[0][0]];
		    } else {
		      message = error_messages['_DEFAULT'];
		    }
		
		    return this.formatErrorsByFeature(message, error, error_messages)
		  },
		
		  formatErrorsByFeature: function (message, error, error_messages) {
		    if (error[0][0] === 'INVALID_PHONE' && this.is_mobile_selector) {
		      var phone_type_val = this.form.find('input[name=phone_type]:checked').val()
		      switch (phone_type_val) {
		        case '1':
		          return message + error_messages['INVALID_MOBILE_WITH_SELECTOR'];
		        case '2':
		          return message + error_messages['INVALID_LANDLINE_WITH_SELECTOR'];
		      }
		    }
		
		    return message;
		  },
		
		  hasErrors: function() {
		    var key;
		
		    for (key in this.errors) {
		      if (this.errors.hasOwnProperty(key)) {
		        return true;
		      }
		    }
		    return false;
		  },
		
		  getDynamicAndStaticQuestions: function() {
		    if (this.isSubsubcategoryFromTypeahead()) {
		      var subcategory = $('[name="parent"]').val().replace(/\d*-/, '');
		    } else {
		      var subcategory = this.$category.val().replace(/\d*-/, '');
		    }
		
		    var subsubcategory = $('#subsubcategory-container input[name="work_type"]:checked').val().replace(/\d*-/, '');
		
		    this.dynamic_question_container.html('<div id="load-spinner"><i class="icon icon-spinner icon-spin icon-lg icon-4x"></i></div>');
		
		    if (this.categoryText === undefined) {
		      var $selectedSubcategory = this.form.find('input[name="work_type"]:checked');
		      if ($selectedSubcategory.length) {
		        this.categoryText = $selectedSubcategory.next('label').html();
		      } else {
		          this.categoryText = this.$category.text();
		      }
		    }
		
		          this.getStaticQuestions(getDynamicQuestions.bind(this));
		    
		    function getDynamicQuestions() {
		      var data = {
		        subcategory: subcategory,
		        subsubcategory: subsubcategory,
		        dynamicQuestionsNewStyles: true,
		      }
		
		      if (this.is_rfq_with_subcategories_first_experiment) {
		        Object.assign(data, { is_rfq_with_subcategories_first: true })
		      }
		
		      $.ajax({
		        url: "https:\/\/www.habitissimo.es\/do_ajax\/load_dynamic_question_fields",
		        method: 'GET',
		        data: data,
		        success : function(data) {
		          this.dynamic_question_container.html(data);
		          this.setCurrentDynamicQuestions();
		          this.getSteps();
		          this.updateProgressBar();
		          this.updateCategoryText(this.categoryText);
		          this.showNext();
		        }.bind(this)
		      });
		    }
		
		
		  },
		  getStaticQuestions: function (cb) {
		    var $staticQuestionsContainer = $("#static-questions-container");
		    var data = {};
		
		    if (this.is_rfq_with_subcategories_first_experiment) {
		      Object.assign(data, { is_rfq_with_subcategories_first: true })
		    }
		
		    $.ajax({
		      url: "https:\/\/www.habitissimo.es\/do_ajax\/load_static_question_fields",
		      method: 'GET',
		      data: data,
		      success: function (response) {
		        $staticQuestionsContainer.html(response);
		        this.setCurrentStaticQuestions();
		        this.getSteps();
		        this.updateProgressBar();
		        if (typeof cb === 'function') {
		          cb();
		        }
		
		      }.bind(this)
		    });
		  },
		  setCurrentStaticQuestions: function() {
		    var allQuestionNames = $.map($('#static-questions-container :input:not([type=hidden])'), function(element) {
		      return element.name;
		    });
		    var uniqueNames = {};
		    allQuestionNames.filter(function(element) {
		      if (!uniqueNames.hasOwnProperty(element)) {
		        if (!element.match(/\[\]$/)) {
		          uniqueNames[element] = undefined;
		        }else {
		          uniqueNames[element] = [];
		        }
		      }
		    });
		    this.static_questions = uniqueNames;
		  },
		  setCurrentDynamicQuestions: function() {
		    var allQuestionNames = $.map($('#dynamic-questions-container :input:not([type=hidden])'), function(element) {
		      return element.name;
		    });
		    var uniqueNames = {};
		    allQuestionNames.filter(function(element) {
		      if (!uniqueNames.hasOwnProperty(element)) {
		        if (!element.match(/\[\]$/)) {
		          uniqueNames[element] = undefined;
		        }else {
		          uniqueNames[element] = [];
		        }
		      }
		    });
		    this.dynamic_questions = uniqueNames;
		  },
		
		  updateProgressBar: function() {
		    var $currentStep = this.getCurrentStep();
		    if (this.$progress_bar.length) {
		      if (!$currentStep.data('dynamic')) {
		        var current_progress_percentage = (this.current_step / this.total_steps) * 100;
		      } else {
		        var current_dynamic_step = this.current_step - 2;
		        var current_progress_percentage = 25  + (current_dynamic_step / this.total_steps) * 100;
		      }
		      this.$progress_bar.css('width', current_progress_percentage + '%');
		    }
		  },
		
		  checkIfDynamicQuestionsHasKeys: function() {
		    for (var k in this.dynamic_questions) {
		      if (this.dynamic_questions.hasOwnProperty(k) && k !== 'guid') return true;
		    }
		    return false;
		  },
		
		  getOnDemandQuestions: function() {
		    if (this.isSubsubcategoryFromTypeahead()) {
		      var subcategory = $('[name="parent"]').val().replace(/\d*-/, '');
		    } else {
		      var subcategory = this.$category.val().replace(/\d*-/, '');
		    }
		
		    var $onDemandQuestionsContainer = $('#ondemand-questions-container'),
		        subsubcategory = $('#subsubcategory-container input[name="work_type"]:checked').val().replace(/\d*-/, '');
		
		    if (this.categoryText === undefined) {
		      var $selectedSubcategory = this.form.find('input[name="work_type"]:checked');
		      if ($selectedSubcategory.length) {
		        this.categoryText = $selectedSubcategory.next('label').html();
		      } else {
		        this.categoryText = this.$category.text();
		      }
		    }
		
		    if (this.zip.val() || this.city.val()) {
		      $.ajax({
		                url: "https:\/\/www.habitissimo.es\/do_ajax\/load_ondemand_questions",
		        method: 'GET',
		        data: {
		          subcategory: subcategory,
		          subsubcategory: subsubcategory,
		          dynamicQuestionsNewStyles: true,
		          zip: this.zip.val(),
		          city: this.city.val()
		        },
		        error: function() {
		          this.unsetOndemandForm();
		        }.bind(this),
		        success : function(data) {
		          if (data) {
		            $onDemandQuestionsContainer.html(data);
		            this.updateCategoryText(this.categoryText);
		            this.configureOndemandForm();
		          } else {
		            this.unsetOndemandForm();
		          }
		        }.bind(this)
		      });
		    }
		  },
		
		  configureOndemandForm: function() {
		    $("#budget-preference-step").removeClass("step").addClass("hidden");
		    $("#estimated-date-step").removeClass("step").addClass("hidden");
		    $("#description-step .title-label").html("Describe lo que necesitas:");
		    $("#description-step textarea").attr('placeholder', "Describe m\u00e1s detalles del trabajo que necesitas para que los profesionales sean m\u00e1s precisos a la hora de pasarte presupuesto");
		    $('#is-ondemand').val(true);
		    $('.popover-info').popover();
		    this.is_ondemand = true;
		    this.getSteps();
		    this.updateProgressBar();
		  },
		
		  unsetOndemandForm: function() {
		    $('#ondemand-questions-container').html("");
		    $("#budget-preference-step").addClass("step").removeClass("hidden");
		    $("#estimated-date-step").addClass("step").removeClass("hidden");
		    $("#description-step .title-label").html(this.description_label_text);
		    $("#description-step textarea").attr('placeholder', this.description_placeholder);
		    $('#is-ondemand').val(false);
		    this.is_ondemand = false;
		    this.getSteps();
		    this.updateProgressBar();
		  },
		
		  scrollTo: function() {
		          HabUtils.scrollTo('#ql-form-container');
		      },
		
		  showCustomCallPreference: function() {
		    $call_custom_preference = $('#call-custom-preference-container');
		
		    if (this.checked && $call_custom_preference.hasClass('hidden')) {
		      $call_custom_preference.removeClass('hidden');
		    }
		  },
		
		  isSubsubcategoryFromTypeahead: function() {
		    return this.has_category_searcher && /^003-\d+/.test(this.$category.val());
		  },
		
		  setTitleOfStep: function () {
		    var $step = this.getCurrentStep();
		    var title = $step.attr('data-step-title');
		    $('#step-title').html(title);
		  },
		});
		
		jQuery(document).ready(function($){
		  new QuotationStepForm('#ql-form');
		
		  $(document.body).on('click', '.cta', function(ev) {
		    var $frm = $('form#rfq :input:not(:hidden):empty:first');
		
		          HabUtils.scrollTo('#ql-form-container');
		    
		    ev.preventDefault();
		
		          $frm.find('').focus();
		      });
		
		  var $mobileHint = $('.hint.mobile-hint');
		  var $phoneHint = $('.hint.phone-hint');
		  var $phoneInput = $('input[name="phone"]');
		
		  $('#phone_type label').on('click', function(ev) {
		    var phoneType = $(this).siblings('input').val();
		    $phoneInput.unmask();
		
		    if (phoneType == 1) {
		      Mask.mobile($phoneInput);
		      toggleHint($mobileHint, $phoneHint);
		    } else if (phoneType == 2) {
		      toggleHint($phoneHint, $mobileHint);
		    }
		  });
		
		  function toggleHint($elemToShow, $elemToHide) {
		    if ($elemToHide.is(':visible')) {
		      $elemToHide.addClass('hidden');
		    }
		
		    if ($elemToShow.is(':hidden')) {
		      $elemToShow.removeClass('hidden');
		    }
		  }
		});
	</script>
	<div class="clear mt_30">
		<span class="as-seen-on-tv"><img alt="Anunciado en TV" src="https://es.habcdn.com/static/img/seen-on-tv.png"></span>
	</div>
</div>



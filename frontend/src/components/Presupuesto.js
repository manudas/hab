
const Presupuesto = (props) => {
	return (
		<div id="form-wrapper">
			<div class="container-fluid gray-container ql-wrapper">
				<div class="container">
					<div class="ql-header ql-header-es">
						<h1 class="side_label t-lg text-bold">
							Pide presupuestos          
						</h1>
						<div id="ql-tagline" class="t-sm text-semibold">
							Construcciones y reformas, instalaciones, limpieza, mudanzas, arquitectos y más…
						</div>
					</div>
					<!-- .header -->
				</div>
			</div>
			<div class="container-fluid gray-container">
				<div class="container">
					<div class="row form-area">
						<RazonesPresupuesto />
						<SolicitaPresupuesto />
					</div>
				</div>
			</div>
			<GarantiaHabitissimo />
		</div>
	);
}

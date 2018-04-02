import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {
	
	// ==========================================================================
	// (COMPONENT IS UNUSED, VARS DECLARED TO AVOID PRODUCTION DEPLOYMENT ERRORS.)
	// ==========================================================================
	title: 		string;
	closeBtnName: string;

	// Chart arrays declaration.
	radar: 		any[] = [];
	barEvolucion: any[] = [];
	barDias: 		any[] = [];
	barIntentos: 	any[] = [];

	nombre: string;
	apellido: string;
	puesto: string;
	area: string;
	departamento: string;
	anos: string;

	// Chart data arrays declaration
	radarData: 		any[] = [];
	barEvolucionData: any[] = [];
	barDiasData: 		any[] = [];
	barIntentosData: 	any[] = [];

	appVars: any = []; 
	bsModalRef: any = [];

  constructor() { }

  ngOnInit() {
  }

}

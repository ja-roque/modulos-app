import { Component, OnInit } from '@angular/core';
import { ModulefetchService } from '../modulefetch.service';
import { UserreportfetchService } from '../userreportfetch.service';

import { DataService } from '../data.service';
import { SessionSlideshowComponent} from '../session-slideshow/session-slideshow.component';
import { Router, Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { AppComponent } from '../app.component';
import { UserReportComponent } from '../user-report/user-report.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Chart } from  'chart.js';


declare var Reveal:any;


@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {
  
  bsModalRef: 	BsModalRef;
  isOn: boolean = true;
  modules: 		{ 'sessionReached': 0}
  modnum 		= 1;
  currentStep 	= 1;

	constructor(private moduleFetch: 	ModulefetchService, 
				private data: 			DataService, 
				private router: 		Router, 
				public appVars: 		AppComponent,
				private modalService: 	BsModalService
	) { }


	getModules(sessionNumber): any {
		return this.moduleFetch.getModules(sessionNumber);
	}



	openModalWithComponent() {

		var config = {
		    animated: true,
		    keyboard: true,
		    backdrop: true,
		    ignoreBackdropClick: false
	  	};

	    const initialState = {
	      list: [
	        'Open a modal with component',
	        'Pass your data',
	        'Do something else',
	        '...'
	      ],	      
	      title: 'Reporte de Progreso'
	    };
	    this.bsModalRef = this.modalService.show(ModalContentComponent, Object.assign({initialState}, config, { class: 'gray clearfix' }));
	    this.bsModalRef.content.closeBtnName = 'Close';	
	    console.log(this.bsModalRef)
	}
	

	goTo(val) {

		let mayGotoMod = true;
		// Verify if the module is enabled for the current user.
		this.getModules(this.modnum).subscribe(data => {      
			this.modules = data			
			console.log(this.modules)

			if (val > this.modules['sessionReached']) {
				alert('Porfavor completa el modulo ' + this.modules.sessionReached + ' para poder cursar éste modulo.')
				mayGotoMod = false;
			}

			if (mayGotoMod) {
				// code...
				let num = this.modnum;
				this.data.changeSession(val);

				this.router.navigate(['/reload'])
		    		.then(()=>{this.router.navigate(['/user/presentation'])})
			}
		})				
	}



  ngOnInit() {

  	this.data.currentSession.subscribe(value => this.modnum = value)

 	//  this.getModules(this.modnum).subscribe(data => {      
	// 		// This method is ran on the on-init to make sure that there is a start and end date on user end.
	// 		console.log('yup, it ran', data)
	// });

	Reveal.initialize({// The "normal" size of the presentation, aspect ratio will be preserved
			// when the presentation is scaled to fit different resolutions
			width: 960,
			height: 700,

			// Factor of the display size that should remain empty around the content
			margin: 0.1,

			// Bounds for smallest/largest possible scale to apply to content
			minScale: 0.2,
			maxScale: 1.0,

			// Display controls in the bottom right corner
			controls: true,		
			controlsTutorial: true,

			// Display a presentation progress bar
			progress: true,

			// Display the page number of the current slide
			slideNumber: false,

			// Push each slide change to the browser history
			history: false,

			// Enable keyboard shortcuts for navigation
			keyboard: true,

			// Enable the slide overview mode
			overview: false,

			// Vertical centering of slides
			center: true,

			// Enables touch navigation on devices with touch input
			touch: true,

			// Loop the presentation
			loop: false,

			// Change the presentation direction to be RTL
			rtl: false,

			// Turns fragments on and off globally
			fragments: true,

			// Flags if the presentation is running in an embedded mode,
			// i.e. contained within a limited portion of the screen
			embedded: true,

			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,

			// Stop auto-sliding after user input
			autoSlideStoppable: true,

			// Enable slide navigation via mouse wheel
			mouseWheel: false,

			// Apply a 3D roll to links on hover
			rollingLinks: false,

			// Hides the address bar on mobile devices
			hideAddressBar: true,

			// Opens links in an iframe preview overlay
			previewLinks: false,

			// Focuses body when page changes visiblity to ensure keyboard shortcuts work
			focusBodyOnPageVisiblityChange: true,

			// Theme (see /css/theme)
			theme: "black",

			// Transition style
			transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

			// Transition speed
			transitionSpeed: 'default', // default/fast/slow

			// Transition style for full page slide backgrounds
			backgroundTransition: 'default', // default/linear/none

			// Parallax background image
			parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

			// Parallax background size
			parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

			// Number of slides away from the current that are visible
			viewDistance: 3
	});

	Reveal.slide(0)

  }

}



@Component({
  selector: 'modal-content',
  templateUrl: '../user-report/user-report.component.html'
  
})
 
export class ModalContentComponent implements OnInit {
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

  // Hardcoded chart legend
  labels = ['Comunicación Asertiva',
			'Enfoque a la Tarea',
			'Gestion del Cambio',
			'Gestion del Tiempo',
			'Supervisión Efectiva',
			'Servicio al Cliente',
			'Gestion de Talento Humano',
			'Trabajo en Equipo',
			'Liderazgo',
			'Analisis de Problemas y Toma de Decisiones',
			'Confrontación de Equipos Efectiva',
			'Equipos de Alto Rendimiento'];

  numLabels = [1,2,3,4,5,6,7,8,9,10,11,12];
 
 		
  constructor(public bsModalRef: BsModalRef, private reportFetch: UserreportfetchService, public appVars: AppComponent,) {}

	getUserReport(): any {
		return this.reportFetch.getUserReport();
	}
 
	ngOnInit() {

		this.getUserReport().subscribe(data => {      		
			
			this.radarData 			= data.reporte.scoresList
			this.barEvolucionData 	= data.reporte.scoresList
			this.barDiasData		= data.reporte.elapsedDaysList
			this.barIntentosData	= data.reporte.attemptsList

			this.nombre				= data.perfil.firstname 
			this.apellido			= data.perfil.lastname
			this.puesto				= data.perfil.role
			this.area				= data.perfil.area
			this.departamento		= data.perfil.department
			this.anos				= data.perfil.expYears
		

		  	this.radar = new Chart('radar', {
			        type: 'radar',
			        data: {
			            labels: this.labels,
			            datasets: [{
			                data: this.radarData,
			                label: 'Calificaciones por Modulo',
			                backgroundColor: '#00ff1a96',
			                borderColor: 'rgb(17, 255, 73)',
			                lineTension: .1,
			                pointRadius: 10,
			                pointHitRadius: 10

			            }]
			        }, 
			         options: {
					    scale: {
					        ticks: {
					            // changes here
					            max: 100
					        }
					    }
					}       
			});

		  	this.barEvolucion = new Chart('barEvolucion',{
		  			type: 'bar',
		                data: {
		   	  				labels: this.numLabels,
		                 	options: {
		        				legend: {
						            labels: {
						                // This more specific font property overrides the global property
						                fontColor: 'white'
						            }
		        				}
							},
			            	datasets: [{                
			                label: '%',
			                backgroundColor: '#0d4c92',
			                borderColor: '#7A0047',
			                borderWidth: 1,
			                data: this.barEvolucionData
			            	}]
		   				},
		                options: {
		                	scales: {
						        yAxes: [{
						            ticks: {
						            	suggestedMax: 100,
						                beginAtZero: true
						            }
						        }]
						    },
		                    responsive: true,
		                    legend: {
		                        position: 'top',
		                    },
		                    title: {
		                        display: true,
		                        text: 'Evolución por Módulos'
		                    }
		                }
		  	});

		  	this.barDias = new Chart('barDias',{
		  			type: 'bar',
		                data: {
		   	  				labels: this.numLabels,
		                 	options: {
		        				legend: {
		            				labels: {
						                // This more specific font property overrides the global property
						                fontColor: 'white'
						            }
		        				}
		    				},
			            	datasets: [{                
			                label: 'Días',
			                backgroundColor: '#0d4c92',
			                borderColor: '#7A0047',
			                borderWidth: 1,
			                data: this.barDiasData
			            	}]
		   				},
		                options: {
		                	scales: {
						        yAxes: [{
						            ticks: {
						            	suggestedMax: 20,
						                beginAtZero: true
						            }
						        }]
						    },
		                    responsive: true,
		                    legend: {
		                        position: 'top',
		                    },
		                    title: {
		                        display: true,
		                        text: 'Días usados para cerrar modulo'
		                    }
		                }
		  	});

		  	this.barIntentos = new Chart('barIntentos',{
		  			type: 'bar',
		                data: {
		   	  				labels: this.numLabels,
		                 	options: {
		        				legend: {
		            				labels: {
		 				               // This more specific font property overrides the global property
		                				fontColor: 'white'
		            				}
		        				}
		    				},
			           		datasets: [{                
			                label: 'Intentos',
			                backgroundColor: '#0d4c92',
			                borderColor: '#7A0047',
			                borderWidth: 1,
			                data: this.barIntentosData
			            	}]
		   				},
		                options: {
		                	scales: {
						        yAxes: [{
						            ticks: {
						            	suggestedMax: 20,
						                beginAtZero: true
						            }
						        }]
						    },
		                    responsive: true,
		                    legend: {
		                        position: 'top',
		                    },
		                    title: {
		                        display: true,
		                        text: 'Veces realizado el examen hasta aprobar'
		                    }
		                }
		  	});

		  	console.log(this.radar)

		});
  	}
}
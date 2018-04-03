import { Component, OnInit, Input } from '@angular/core';
import { AllreportsFetchService } from '../allreports-fetch.service';
import { AllusersFetchService } from '../allusers-fetch.service';
import { UserreportfetchService } from '../userreportfetch.service';
import { DataService } from '../data.service';

import { AppComponent } from '../app.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Chart } from  'chart.js';


@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent implements OnInit {
  users: any[] = []
  requestedUserProfile: any = '';
  bsModalRef:   BsModalRef;

  constructor(public appVars: AppComponent, private data: DataService, private modalService: BsModalService, private allUsersService: AllusersFetchService, private allReportsService: AllreportsFetchService) { }

  getAllUsers(): any {
		return this.allUsersService.getAllUsers();
	}

  goToGraph(this, userProfileId): any {    
    this.data.setRequestedProfile(userProfileId)

    this.openModalWithComponent();	 	
	}

  openModalWithComponent(): any {

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
      this.bsModalRef = this.modalService.show(AdminModalContentComponent, Object.assign({initialState}, config, { class: 'gray clearfix' }));
      this.bsModalRef.content.closeBtnName = 'Close'; 
  }
  
  ngOnInit() {
  	
  	this.getAllUsers().subscribe(value => {
      console.log(value)
  		this.users = value
    });

        
  }

}

@Component({
  selector: 'modal-content',
  templateUrl: '../user-report/user-report.component.html'
  
})
 
export class AdminModalContentComponent implements OnInit {
  title:    string;
  closeBtnName: string;
  
  // Chart arrays declaration.
  radar:    any[] = [];
  barEvolucion: any[] = [];
  barDias:    any[] = [];
  barIntentos:  any[] = [];
  
  nombre: string;
  apellido: string;
  puesto: string;
  area: string;
  departamento: string;
  anos: string;

  // Chart data arrays declaration
  radarData:    any[] = [];
  barEvolucionData: any[] = [];
  barDiasData:    any[] = [];
  barIntentosData:  any[] = [];

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
  requestedUserProfile: any = '';
    
  constructor(public bsModalRef: BsModalRef, private data:       DataService, private admin_screen: AdminScreenComponent, private reportFetch: UserreportfetchService, public appVars: AppComponent,) {}

  getUserReport(): any {
    this.data.requestedProfile.subscribe(value => this.requestedUserProfile = value)
    console.log(this.requestedUserProfile)
    return this.reportFetch.getUserReport(this.requestedUserProfile);
  }
 
  ngOnInit() {

    this.getUserReport().subscribe(data => {          
      
      this.radarData      = data.reporte.scoresList
      this.barEvolucionData   = data.reporte.scoresList
      this.barDiasData    = data.reporte.elapsedDaysList
      this.barIntentosData  = data.reporte.attemptsList

      this.nombre       = data.perfil.firstname 
      this.apellido     = data.perfil.lastname
      this.puesto       = data.perfil.role
      this.area       = data.perfil.area
      this.departamento   = data.perfil.department
      this.anos       = data.perfil.expYears
    

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

    });
    }
}

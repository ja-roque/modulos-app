import { Component, OnInit } from '@angular/core';
import { AllreportsFetchService } from '../allreports-fetch.service';
import { Chart } from  'chart.js';

@Component({
  selector: 'app-session-graphs',
  templateUrl: './session-graphs.component.html',
  styleUrls: ['./session-graphs.component.css']
})
export class SessionGraphsComponent implements OnInit {

  // Chart arrays declaration.
  AllRadar:        any[] = [];
  AllBarEvolucion: any[] = [];
  AllBarDias:      any[] = [];
  AllBarIntentos:  any[] = [];

  // Chart data arrays declaration
  radarData:        any[] = [];
  barEvolucionData: any[] = [];
  barDiasData:      any[] = [];
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

  constructor(private allReportsService: AllreportsFetchService) { }

    getAllUserReports(): any {
        return this.allReportsService.getAllReports();
    }

  ngOnInit() {
    
    this.getAllUserReports().subscribe(data => {
        console.log(data);

        this.radarData          = data.avgs.scores;
        this.barEvolucionData   = data.avgs.scores;
        this.barDiasData        = data.avgs.days;
        this.barIntentosData    = data.avgs.attempts;

        this.AllRadar = new Chart('AllRadar', {
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

        this.AllBarEvolucion = new Chart('AllBarEvolucion',{
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

        this.AllBarDias = new Chart('AllBarDias',{
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

        this.AllBarIntentos = new Chart('AllBarIntentos',{
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

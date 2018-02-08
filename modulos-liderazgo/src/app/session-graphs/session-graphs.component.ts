import { Component, OnInit } from '@angular/core';
import { Chart } from  'chart.js';

@Component({
  selector: 'app-session-graphs',
  templateUrl: './session-graphs.component.html',
  styleUrls: ['./session-graphs.component.css']
})
export class SessionGraphsComponent implements OnInit {

	chart = [];
    radar = [];
	bar = [];

  constructor() { }

  ngOnInit() {
      
    var barcanvas = <HTMLCanvasElement> document.getElementById('bar'),
    ctx = barcanvas.getContext('2d'),
    grd;

    // Create gradient for bar canvas
    grd = ctx.createLinearGradient(150.000, 0.000, 150.000, 300.000);
    // Add colors
    grd.addColorStop(1.000, 'rgba(255, 0, 255, 1.000)');
    grd.addColorStop(0.200, 'rgba(255, 100, 255, 0.000)');


    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultFontSize = 18;
  	this.bar = new Chart('bar',{
  			type: 'bar',
                data: {
   	  		labels: ["Session 1", "Session 2", "Session 3", "Session 4", "Session 5", "Session 6", "Session 7"],
                 options: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'white'
            }
        }
    },
            datasets: [{                
                label: 'Enero',
                backgroundColor: grd,
                borderColor: '#7A0047',
                borderWidth: 1,
                data: [
                    80,90,60,100,80,30,94
                ]
            }]
   },
                options: {
                	scales: {
				        yAxes: [{
				            ticks: {
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
                        text: 'Promedio Examenes'
                    }
                }


  	})

    this.radar = new Chart('radar', {
        type: 'radar',
        data: {
            labels: ['Sesion 1', 'Sesion 2', 'Sesion 3', 'Sesion 4', 'Sesion 5', 'Sesion 6', 'Sesion 7', 'Sesion 8', 'Sesion 9', 'Sesion 10', 'Sesion 11', 'Sesion 12'],
            datasets: [{
                data: [20, 10, 4, 25, 9, 30, 12, 15, 20],
                label: 'Promedio puntajes',
                backgroundColor: 'rgb(17, 255, 73, 0.5)',
                borderColor: 'rgb(17, 255, 73)',
                lineTension: .2,
                pointRadius: 10

            }]
        },        
    });
  

  	this.chart = new Chart('canvas',{
  		type: 'line',
            data: {
                labels: ["Session 1", "Session 2", "Session 3", "Session 4", "Session 5", "Session 6", "Session 7"],
                datasets: [{
                    label: "Marco",
                    backgroundColor: ctx,
                    borderColor: '#9DC545',
                    data: [
                        10,20,30,40,50,60,70
                    ],
                    fill: false,
                }, {
                    label: "Juan",
                    fill: false,
                    backgroundColor: '#00A4C5',
                    borderColor: '#00A4C5',
                    data: [
                        20,30,50,70,40,80,50
                    ],
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:'Resultados Examen Session 1'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Examenes'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Porcentajes'
                        }
                    }]
                }
            }
        });
      
  }

}

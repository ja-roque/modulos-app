import { Component, OnInit } from '@angular/core';
import { Chart } from  'chart.js';

@Component({
  selector: 'app-session-graphs',
  templateUrl: './session-graphs.component.html',
  styleUrls: ['./session-graphs.component.css']
})
export class SessionGraphsComponent implements OnInit {

	chart = [];
	bar = [];

  constructor() { }

  ngOnInit() {


  	this.bar = new Chart('bar',{
  			type: 'bar',
                data: {
   	  		labels: ["Session 1", "Session 2", "Session 3", "Session 4", "Session 5", "Session 6", "Session 7"],
            datasets: [{
                label: 'Enero',
                backgroundColor: '#7A0047',
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

  	this.chart = new Chart('canvas',{
  		type: 'line',
            data: {
                labels: ["Session 1", "Session 2", "Session 3", "Session 4", "Session 5", "Session 6", "Session 7"],
                datasets: [{
                    label: "Marco",
                    backgroundColor: '#9DC545',
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

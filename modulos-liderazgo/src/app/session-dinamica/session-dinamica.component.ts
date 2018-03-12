import { Component, OnInit } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-session-dinamica',
  templateUrl: './session-dinamica.component.html',
  styleUrls: ['./session-dinamica.component.css']
})
export class SessionDinamicaComponent implements OnInit {

  constructor( private route: ActivatedRoute, private data: DataService) { }
  dinamica: {}
  modnum: {}
  ngOnInit() {
  	this.data.currentSession.subscribe(value => {
	  		this.modnum = value;	  		
	  	})

  	this.dinamica = this.route.snapshot.data['dinamica'];
  	console.log(this.dinamica)
  }

}

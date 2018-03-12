import { Component, OnInit } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-session-bibliografia',
  templateUrl: './session-bibliografia.component.html',
  styleUrls: ['./session-bibliografia.component.css']
})
export class SessionBibliografiaComponent implements OnInit {

  constructor( private route: ActivatedRoute, private data: DataService) { }
  bibliografia: string;
  modnum: {}
  ngOnInit() {
  	this.data.currentSession.subscribe(value => {
	  		this.modnum = value;	  		
	  	})
  	this.bibliografia = this.route.snapshot.data['bibliografia'][0];
  	console.log(this.bibliografia)
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-session-test',
  templateUrl: './session-test.component.html',
  styleUrls: ['./session-test.component.css']
})
export class SessionTestComponent implements OnInit {

  constructor( private route: ActivatedRoute, private data: DataService) { }
  test: {};
  modnum: {};
  ngOnInit() {
  	this.data.currentSession.subscribe(value => {
	  		this.modnum = value;	  		
	  	})
  	this.test = this.route.snapshot.data['test'];
  	console.log(this.test)

  }

}

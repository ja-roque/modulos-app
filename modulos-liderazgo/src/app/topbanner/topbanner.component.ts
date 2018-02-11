import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-topbanner',
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.css']
})
export class TopbannerComponent implements OnInit {


	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};



  constructor(private appVars: AppComponent ) { }

  ngOnInit() {
  }

}

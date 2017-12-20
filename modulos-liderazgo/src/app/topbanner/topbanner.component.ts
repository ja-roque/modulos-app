import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

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



  constructor() { }

  ngOnInit() {
  }

}

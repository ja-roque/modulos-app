import { Component, OnInit } from '@angular/core';
import { SessionSlideshowComponent} from '../session-slideshow/session-slideshow.component';

declare var Reveal:any;


@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  isOn: boolean = true;

  currentStep: any = 1;

  constructor() { 


  	
  }

  ngOnInit() {
  
  	

  	Reveal.configure({viewDistance: 3});

  	console.log(Reveal)

  }

}

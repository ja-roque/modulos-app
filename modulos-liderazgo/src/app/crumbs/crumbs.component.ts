import { Component, OnInit } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { PreventDefaultDirective } from './../prevent-default.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-crumbs',
  templateUrl: './crumbs.component.html',
  styleUrls: ['./crumbs.component.css']
})
export class CrumbsComponent implements OnInit {

crumbs = {
		"presentation":false,
		"doc":false,
		"video":false,
    "dinamica":false,
		"exam":false,
    "bibliografia":false,
    "test":false
	}

  constructor(private router: Router) { }

    nextStep(step) {

  	switch (step) {
  		case 1:{
  			this.router.navigate(['/reload'])
    			.then(()=>{this.router.navigate(['/user/presentation'])});
  			// code...
  			break;
  		}
  		case 2:
  		{
			this.router.navigate(['/reload'])
    			.then(()=>{this.router.navigate(['/user/doc'])});
  			// code...
  			break;
  		}
  		case 3:{
        this.router.navigate(['/reload'])
          .then(()=>{this.router.navigate(['/user/video'])});
        // code...
        break;
      }
      case 4:{
        this.router.navigate(['/reload'])
          .then(()=>{this.router.navigate(['/user/dinamica'])});
        // code...
        break;
      }  
      case 5:{
        this.router.navigate(['/reload'])
          .then(()=>{this.router.navigate(['/user/exam'])});
        // code...
        break;
      }
      case 6:{
        this.router.navigate(['/reload'])
          .then(()=>{this.router.navigate(['/user/bibliografia'])});
        // code...
        break;
      }
      case 7:{
        this.router.navigate(['/reload'])
          .then(()=>{this.router.navigate(['/user/test'])});
        // code...
        break;
      }
  		default:
  			this.router.navigate(['/reload'])
    			.then(()=>{this.router.navigate(['/user/exam'])});
  			// code...
  			break;
  	}
  	
  }

  ngOnInit() {
  	console.log("this.router.url",this.router.url);
  	switch (this.router.url) {
      case "/user/test":
        this.crumbs.test = true;
      case "/user/bibliografia":
        this.crumbs.bibliografia = true;
      case "/user/exam":
        this.crumbs.exam = true;
  		case "/user/dinamica":
  			this.crumbs.dinamica = true;
  		case "/user/video":  		
  			this.crumbs.video = true;
  		case "/user/doc":
  			this.crumbs.doc = true;
  		case "/user/presentation":
  			this.crumbs.presentation = true;
  	}

  	console.log(this.crumbs);
  }

}

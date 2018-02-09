import { Component, OnInit } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { PreventDefaultDirective } from './../prevent-default.directive';

@Component({
  selector: 'app-crumbs',
  templateUrl: './crumbs.component.html',
  styleUrls: ['./crumbs.component.css']
})
export class CrumbsComponent implements OnInit {



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
  		default:
  			this.router.navigate(['/reload'])
    			.then(()=>{this.router.navigate(['/user/exam'])});
  			// code...
  			break;
  	}
  	
  }

  ngOnInit() {
  	console.log("this.router.url",this.router.url);
  }

}

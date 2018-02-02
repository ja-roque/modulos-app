import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PresentationfetchService } from './presentationfetch.service';
import { DataService } from './data.service';

@Injectable()
export class PptResolve implements Resolve<any> {
	num = 1;


  constructor(private pptFetchService: PresentationfetchService,private data: DataService) {}
  	
  resolve(route: ActivatedRouteSnapshot) {
  	this.data.currentSession.subscribe(value => {
  		this.num = value;
  	})

    // return this.docFetchService.getDoc((route.paramMap.get('id')));
    
    console.log('num',this.num);
    return this.pptFetchService.getPresentation(this.num);
  }
}



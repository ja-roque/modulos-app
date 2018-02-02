import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DocfetchService } from './docfetch.service';
import { DataService } from './data.service';

@Injectable()
export class DocResolve implements Resolve<any> {
	num = 1;

  constructor(private docFetchService: DocfetchService,private data: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {

  	this.data.currentSession.subscribe(value => {
  		this.num = value;
  	})
    // return this.docFetchService.getDoc((route.paramMap.get('id')));
    return this.docFetchService.getDoc(this.num);
  }
}



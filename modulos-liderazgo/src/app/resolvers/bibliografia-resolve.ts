import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { BibliografiaFetchService } from '../fetchers/bibliografia-fetch.service';
import { DataService } from '../data.service';

@Injectable()
export class BibliografiaResolve implements Resolve<any> {
	num = 1;


  constructor(private BibliografiaFetchService: BibliografiaFetchService,private data: DataService) {}
  	
  resolve(route: ActivatedRouteSnapshot) {
  	this.data.currentSession.subscribe(value => {
  		this.num = value;
  	})

    return this.BibliografiaFetchService.getBibliografia(this.num);
  }
}



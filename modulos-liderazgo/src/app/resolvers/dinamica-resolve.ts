import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DinamicaFetchService } from '../fetchers/dinamica-fetch.service';
import { DataService } from '../data.service';

@Injectable()
export class DinamicaResolve implements Resolve<any> {
	num = 1;


  constructor(private dinamicaFetchService: DinamicaFetchService,private data: DataService) {}
  	
  resolve(route: ActivatedRouteSnapshot) {
  	this.data.currentSession.subscribe(value => {
  		this.num = value;
  	})

    return this.dinamicaFetchService.getDinamica(this.num);
  }
}



import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ExamfetchService } from './examfetch.service';
import { DataService } from './data.service';

@Injectable()
export class ExamResolve implements Resolve<any> {
	num = 1;
  constructor(private examFetchService: ExamfetchService,private data: DataService) {}
  

  resolve(route: ActivatedRouteSnapshot) {

  	this.data.currentSession.subscribe(value => {
  		this.num = value;
  	})
    // return this.docFetchService.getDoc((route.paramMap.get('id')));
    return this.examFetchService.getExam(this.num);
  }
}



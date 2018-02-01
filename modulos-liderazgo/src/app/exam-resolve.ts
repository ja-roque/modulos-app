import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ExamfetchService } from './examfetch.service';

@Injectable()
export class ExamResolve implements Resolve<any> {

  constructor(private examFetchService: ExamfetchService) {}

  resolve(route: ActivatedRouteSnapshot) {
    // return this.docFetchService.getDoc((route.paramMap.get('id')));
    return this.examFetchService.getExam(12);
  }
}



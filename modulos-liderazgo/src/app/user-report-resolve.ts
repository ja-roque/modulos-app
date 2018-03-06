import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserreportfetchService } from './userreportfetch.service';
import { DataService } from './data.service';

@Injectable()
export class UserReportResolve implements Resolve<any> {
	num = 1;

  constructor(private userReportFetchService: UserreportfetchService, private data: DataService) {}
  	
  resolve(route: ActivatedRouteSnapshot) {
  	this.data.currentSession.subscribe(value => {
  		this.num = value;
  	})
    return this.userReportFetchService.getUserReport();
  }
}



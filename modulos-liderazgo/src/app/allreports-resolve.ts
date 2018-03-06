import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AllreportsFetchService } from './allreports-fetch.service';
import { DataService } from './data.service';

@Injectable()
export class AllusersResolve implements Resolve<any> {
  num = 1;
  constructor(private allReportsService: AllreportsFetchService) {}
  
  resolve(route: ActivatedRouteSnapshot) {

    return this.allReportsService.getAllReports();
  }
}

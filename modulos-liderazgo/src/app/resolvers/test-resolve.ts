import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TestFetchService } from '../fetchers/test-fetch.service';
import { DataService } from '../data.service';

@Injectable()
export class TestResolve implements Resolve<any> {
	num = 1;


  constructor(private TestFetchService: TestFetchService,private data: DataService) {}
  	
  resolve(route: ActivatedRouteSnapshot) {
  	this.data.currentSession.subscribe(value => {
  		this.num = value;
  	})

    return this.TestFetchService.getTest(this.num);
  }
}



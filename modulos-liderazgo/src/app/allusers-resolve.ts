import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AllusersFetchService } from './allusers-fetch.service';
import { DataService } from './data.service';

@Injectable()
export class AllusersResolve implements Resolve<any> {
  num = 1;
  constructor(private allUsersService: AllusersFetchService) {}
  
  resolve(route: ActivatedRouteSnapshot) {

    return this.allUsersService.getAllUsers();
  }
}

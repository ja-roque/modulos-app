import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DocfetchService } from './docfetch.service';

@Injectable()
export class DocResolve implements Resolve<any> {

  constructor(private docFetchService: DocfetchService) {}

  resolve(route: ActivatedRouteSnapshot) {
    // return this.docFetchService.getDoc((route.paramMap.get('id')));
    return this.docFetchService.getDoc(1);
  }
}



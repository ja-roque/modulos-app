import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PresentationfetchService } from './presentationfetch.service';

@Injectable()
export class PptResolve implements Resolve<any> {

  constructor(private pptFetchService: PresentationfetchService) {}

  resolve(route: ActivatedRouteSnapshot) {
    // return this.docFetchService.getDoc((route.paramMap.get('id')));
    return this.pptFetchService.getPresentation(1);
  }
}



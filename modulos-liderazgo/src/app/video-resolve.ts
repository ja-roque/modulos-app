import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { VideoFetchService } from './video-fetch.service';

@Injectable()
export class VideoResolve implements Resolve<any> {

  constructor(private videoFetchService: VideoFetchService) {}

  resolve(route: ActivatedRouteSnapshot) {
    // return this.docFetchService.getDoc((route.paramMap.get('id')));
    return this.videoFetchService.getVideo(3);
  }
}



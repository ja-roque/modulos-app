import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { VideoFetchService } from './video-fetch.service';
import { DataService } from './data.service';

@Injectable()
export class VideoResolve implements Resolve<any> {
	num = 1;

  constructor(private videoFetchService: VideoFetchService,private data: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {
  	this.data.currentSession.subscribe(value => {
  		this.num = value;
  	})
    // return this.docFetchService.getDoc((route.paramMap.get('id')));
    return this.videoFetchService.getVideo(this.num);
  }
}



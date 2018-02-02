import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class VideoFetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

   response: {}

  getVideo (number) {
  	var videoUrl = 'http://45.55.251.183/getvideo?id=' + number;  // URL to web api
  	return this.http.get(videoUrl)
  }

}


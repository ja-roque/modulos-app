import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PresentationfetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

   response: {}

  getPresentation (number) {
  	var presentationUrl = 'http://45.55.251.183/getpresentation?id=' + number;  // URL to web api
  	return this.http.get(presentationUrl)
  }

  getPPTArray (num) {
  	
  }
}

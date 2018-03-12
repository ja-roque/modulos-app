import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class TestFetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

   response: {}

  getTest (number) {
  	var testUrl = 'http://45.55.251.183/gettest?id=' + number;  // URL to web api
  	return this.http.get(testUrl)
  }

}

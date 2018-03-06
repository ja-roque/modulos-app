import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserreportfetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  response: {}

  getUserReport () {
  	var modulesUrl = 'http://45.55.251.183/getuserreport/';  // URL to web api
  	return this.http.get(modulesUrl,
  		{headers: new HttpHeaders().set('Authorization', 'JWT ' + localStorage.getItem("jwtToken")) }
  		)
  }
}

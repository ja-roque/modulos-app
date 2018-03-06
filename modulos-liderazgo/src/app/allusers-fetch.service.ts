import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AllusersFetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

  response: {}

  getAllUsers() {
  	var modulesUrl = 'http://45.55.251.183/getallusers/';  // URL to web api
  	return this.http.get(modulesUrl,
  		{headers: new HttpHeaders().set('Authorization', 'JWT ' + localStorage.getItem("jwtToken")) }
  		)
  }
}

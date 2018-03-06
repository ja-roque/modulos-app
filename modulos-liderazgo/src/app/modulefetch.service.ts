import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ModulefetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

  response: {}

  getModules (sessionNumber) {
  	var modulesUrl = 'http://45.55.251.183/getusermodules/?sessionnumber=' + sessionNumber;  // URL to web api
  	return this.http.get(modulesUrl,
  		{headers: new HttpHeaders().set('Authorization', 'JWT ' + localStorage.getItem("jwtToken")) }
  		)
  }
}

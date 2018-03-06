import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ModulefetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

  response: {}

  getModules (sessionNumber) {
  	var modulesUrl = 'http://localhost:9001/getusermodules/?sessionnumber=' + sessionNumber;  // URL to web api
  	return this.http.get(modulesUrl,
  		{headers: new HttpHeaders().set('Authorization', 'JWT ' + localStorage.getItem("jwtToken")) }
  		)
  }
}

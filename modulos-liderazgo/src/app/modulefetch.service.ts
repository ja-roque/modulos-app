import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ModulefetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

   response: {}

  getModules () {
  	var modulesUrl = 'http://localhost:9000/getusermodules/';  // URL to web api
  	return this.http.get(modulesUrl,
  		{headers: new HttpHeaders().set('Authorization', 'JWT ' + localStorage.getItem("jwtToken") ) }
  		)
  }
}

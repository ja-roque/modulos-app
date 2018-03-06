import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AllusersFetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

  response: {}

  getAllUsers() {
  	var modulesUrl = 'http://localhost:9001/getallusers/';  // URL to web api
  	return this.http.get(modulesUrl,
  		{headers: new HttpHeaders().set('Authorization', 'JWT ' + localStorage.getItem("jwtToken")) }
  		)
  }
}

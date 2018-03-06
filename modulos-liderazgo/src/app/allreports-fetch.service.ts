import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AllreportsFetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

  response: {}

  getAllReports () {
  	var modulesUrl = 'http://localhost:9001/getallreports/';  // URL to web api
  	return this.http.get(modulesUrl,
  		{headers: new HttpHeaders().set('Authorization', 'JWT ' + localStorage.getItem("jwtToken")) }
  		)
  }
}

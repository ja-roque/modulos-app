import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DocfetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

   response: {}

  getDoc (number) {
  	var docUrl = 'http://localhost:9000/getdoc?id=' + number;  // URL to web api
  	return this.http.get(docUrl)
  }
}

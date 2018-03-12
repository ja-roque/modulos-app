import { Injectable } from '@angular/core';

@Injectable()
export class BibliografiaFetchService {

  constructor() { }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class BibliografiaFetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

   response: {}

  getBibliografia (number) {
  	var bibliografiaUrl = 'http://45.55.251.183/getbibliografia?id=' + number;  // URL to web api
  	return this.http.get(bibliografiaUrl)
  }

}

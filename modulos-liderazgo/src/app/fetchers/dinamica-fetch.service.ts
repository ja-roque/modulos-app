import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DinamicaFetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

   response: {}

  getDinamica (number) {
  	var dinamicaUrl = 'http://45.55.251.183/getdinamica?id=' + number;  // URL to web api
  	return this.http.get(dinamicaUrl)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DinamicaFetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

   response: {}

  getDinamica (number) {
  	var dinamicaUrl = 'http://localhost:9001/getdinamica?id=' + number;  // URL to web api
  	return this.http.get(dinamicaUrl)
  }

}

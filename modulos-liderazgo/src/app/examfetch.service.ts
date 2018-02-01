import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ExamfetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

   response: {}

  getExam (number) {
  	var examUrl = 'http://45.55.251.183/getexam?id=' + number;  // URL to web api
  	return this.http.get(examUrl)
  }
}

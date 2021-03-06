import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PostExamAnswersService {

  constructor( 
  	private http: HttpClient,
  ) { }

  

  response: {}

  postExamScore (SessionNumber, Score) {
  	var postExamScoreUrl = 'http://45.55.251.183/postexamscore/';  // URL to web api
  	return this.http.post(postExamScoreUrl, {"sessionNumber": SessionNumber, "Score": Score},
  		{headers: new HttpHeaders().set('Authorization', 'JWT ' + localStorage.getItem("jwtToken") ) }
  		)
  }
}

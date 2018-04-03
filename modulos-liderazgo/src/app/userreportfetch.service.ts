import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserreportfetchService {

  constructor( 
  	private http: HttpClient,
  ) { }

  response: {}

  getUserReport (userProfileId?) {
    console.log(userProfileId != null)
  	var modulesUrl = 'http://45.55.251.183/getuserreport/' + (userProfileId != null ? '?user_profile_id=' + String(userProfileId) : '');  // URL to web api
  	return this.http.get(modulesUrl,
  		{headers: new HttpHeaders().set('Authorization', 'JWT ' + localStorage.getItem("jwtToken")) }
  		)
  }
}

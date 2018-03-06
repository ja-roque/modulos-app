import { Injectable } from '@angular/core';
declare var jquery:any;
declare var $ :any;


@Injectable()
export class AuthService {

	constructor() { }

	log_in(user: string, password: string) {
		console.log(user)
		console.log(password)
		let data = { 'username' : user, 'password' : password}
		let jsonData = JSON.stringify(data);


		$.ajax({
	        url: 'http://45.55.251.183/rest-auth/login/',
	        type: "POST",
		    dataType: "json",
		    data: jsonData,
		    contentType: "application/json",
	        success: function(data) {
	          console.log(data)
	          window.location.href = '/user/welcome';
	          localStorage.setItem('jwtToken', data.token);
	        },
	        error: function(data){
	        	$('#loginLoading').attr('hidden', true);
	        	$('#loginAuthError').removeAttr('hidden');
	        }
	      });

		return 'theResponse';
		}

	public isAuthenticated(): boolean {
    const token = localStorage.getItem('jwtToken');
    // Check whether the token is expired and return
    // true or false
    return !this.isTokenExpired(token);
  }

	private isTokenExpired(token){
		
		let expired: boolean = true;

		$.ajax({
	        url: 'http://45.55.251.183/api-token-verify/',
	        type: "POST",
	        async: false,	    
		    data: JSON.stringify({'token' : token}),
		    contentType: "application/json",
	        success: function(data) {
	        	// It is NOT expired if in here
	        	console.log(data)
	        	
	        	if("token" in data){	        		
		        	expired = false
		        } else {
		        	expired = true
		        }
	        },
	        error: function(data){
	        	console.log(data)
        		expired = true
	        }
	      });

		return expired;
	}

}

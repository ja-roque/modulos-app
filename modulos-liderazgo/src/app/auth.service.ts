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
	        url: 'http://localhost:9000/rest-auth/login/',
	        type: "POST",
		    dataType: "json",
		    data: jsonData,
		    contentType: "application/json",
	        success: function(data) {
	          console.log(data)
	          window.location.href = '/user';
	        },
	        error: function(data){
	        	$('#loginLoading').attr('hidden', true);
	        	$('#loginAuthError').removeAttr('hidden');
	        }
	      });

		return 'theResponse';
		}

}

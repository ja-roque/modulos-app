import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent implements OnInit {

  constructor(private authService: AuthService, private appVars: AppComponent) { }

  ngOnInit() {
  }

	loginFormSubmit(loginForm: any): void {
		$('#loginLoading').removeAttr('hidden');
		console.log(loginForm);
		
		let username = loginForm.form.value.username
		let password = loginForm.form.value.password

		this.authService.log_in(username, password);
	}

}

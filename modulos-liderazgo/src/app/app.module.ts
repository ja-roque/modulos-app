import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { AppRoutingModule } from './/app-routing.module';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { UserScreenComponent } from './user-screen/user-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbannerComponent,
    LandingScreenComponent,
    UserScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap';

import { AuthService } from './auth.service';
import { DocfetchService } from './docfetch.service';
import { PresentationfetchService } from './presentationfetch.service';
import { VideoFetchService } from './video-fetch.service';
import { ExamfetchService } from './examfetch.service';
import { ModulefetchService } from './modulefetch.service';
import { AllreportsFetchService } from './allreports-fetch.service';
import { AllusersFetchService } from './allusers-fetch.service';

import { PostExamAnswersService } from './post-exam-answers.service';
import { UserreportfetchService } from './userreportfetch.service';
import { AuthGuardService } from './auth-guard.service';

import { DocResolve } from './doc-resolve';
import { ExamResolve } from './exam-resolve';
import { PptResolve } from './ppt-resolve';
import { VideoResolve } from './video-resolve';


import { DataService } from './data.service';



import { AppComponent } from './app.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { AppRoutingModule } from './/app-routing.module';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { SessionSlideshowComponent} from './session-slideshow/session-slideshow.component';
import { SessionDocComponent } from './session-doc/session-doc.component';
import { SessionVideoComponent } from './session-video/session-video.component';
import { SessionExamComponent } from './session-exam/session-exam.component';

import * as axios from 'axios';
import { WelcomeComponent } from './welcome/welcome.component';
import { SessionGraphsComponent } from './session-graphs/session-graphs.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { CrumbsComponent } from './crumbs/crumbs.component';
import { PreventDefaultDirective } from './prevent-default.directive';
import { ModalContentComponent } from './user-screen/user-screen.component';
import { UserReportComponent } from './user-report/user-report.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbannerComponent,
    LandingScreenComponent,
    UserScreenComponent,
    SessionSlideshowComponent,
    SessionDocComponent,
    SessionVideoComponent,
    SessionExamComponent,
    WelcomeComponent,
    SessionGraphsComponent,
    AdminScreenComponent,
    CrumbsComponent,
    PreventDefaultDirective,
    UserReportComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
    AuthService, 
    DocfetchService, 
    VideoFetchService, 
    PresentationfetchService, 
    ExamfetchService, 
    ModulefetchService, 
    DocResolve, 
    ExamResolve, 
    PptResolve, 
    VideoResolve, 
    DataService,
    PostExamAnswersService,
    UserreportfetchService,
    AuthGuardService,
    AllreportsFetchService,
    AllusersFetchService
  ],
  bootstrap: [AppComponent],
  entryComponents: [UserReportComponent, ModalContentComponent]
})
export class AppModule { }


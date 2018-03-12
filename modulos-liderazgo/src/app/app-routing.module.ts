import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';

import { SessionSlideshowComponent } from './session-slideshow/session-slideshow.component';
import { SessionDocComponent } from './session-doc/session-doc.component';
import { SessionVideoComponent } from './session-video/session-video.component';
import { SessionExamComponent } from './session-exam/session-exam.component';
import { SessionDinamicaComponent } from './session-dinamica/session-dinamica.component';
import { SessionBibliografiaComponent } from './session-bibliografia/session-bibliografia.component';
import { SessionTestComponent } from './session-test/session-test.component';

import { UserScreenComponent } from './user-screen/user-screen.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SessionGraphsComponent } from './session-graphs/session-graphs.component';

// Admin =========================================
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
//  ==============================================

// Route Guards =================================
import { DocResolve } from './doc-resolve';
import { PptResolve } from './ppt-resolve';
import { VideoResolve } from './video-resolve';
import { ExamResolve } from './exam-resolve';
import { DinamicaResolve } from './resolvers/dinamica-resolve';
import { BibliografiaResolve } from './resolvers/bibliografia-resolve';
import { TestResolve } from './resolvers/test-resolve';

import { AuthGuardService as AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: LandingScreenComponent },
  { path: 'reload', component: UserScreenComponent},
  { path: 'admin', component: AdminScreenComponent,
    children:[
      {
        path: 'graphs',
        component: SessionGraphsComponent,                     
      }
    ]
  },
  { path: 'user', component: UserScreenComponent, canActivate: [AuthGuard],
  	children: [
      {
          path: 'welcome',
          component: WelcomeComponent,          
        },
      {
        path: 'presentation',
        component: SessionSlideshowComponent,
        resolve: {
        ppt: PptResolve
      }       
      },
      {
        path: 'doc',
        component: SessionDocComponent,
        resolve: {
	      doc: DocResolve
	    }        
      },
      {
        path: 'video',
        component: SessionVideoComponent,
        resolve: {
        video: VideoResolve
      }
      },
      {
        path: 'dinamica',
        component: SessionDinamicaComponent,
        resolve: {
        dinamica: DinamicaResolve
      }
      },
      {
        path: 'exam',
        component: SessionExamComponent,
        resolve: {
        exam: ExamResolve
      }
      },
      {
        path: 'bibliografia',
        component: SessionBibliografiaComponent,
        resolve: {
        bibliografia: BibliografiaResolve
      }
      },
      {
        path: 'test',
        component: SessionTestComponent,
        resolve: {
        test: TestResolve
      }
      },
    ]
 	},
   { path: '**', component: LandingScreenComponent },
  // { path: 'presentation', component: SessionSlideshowComponent, pathMatch: 'full', outlet: 'step' },
  // { path: 'doc', component: SessionDocComponent, pathMatch: 'full', outlet: 'step' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

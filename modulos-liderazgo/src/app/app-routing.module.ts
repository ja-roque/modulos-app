import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { SessionSlideshowComponent } from './session-slideshow/session-slideshow.component';
import { SessionDocComponent } from './session-doc/session-doc.component';
import { SessionVideoComponent } from './session-video/session-video.component';
import { UserScreenComponent } from './user-screen/user-screen.component';

import { DocResolve } from './doc-resolve';

const routes: Routes = [
  { path: '', component: LandingScreenComponent },
  { path: 'user', component: UserScreenComponent,
  	children: [
      {
        path: 'presentation',
        component: SessionSlideshowComponent        
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
      }
    ]
 	},
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

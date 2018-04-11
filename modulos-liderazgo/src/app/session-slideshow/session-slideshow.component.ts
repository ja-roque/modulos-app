import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { PresentationfetchService } from '../presentationfetch.service';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

declare var Reveal:any;

@Component({
  selector: 'app-session-slideshow',
  templateUrl: './session-slideshow.component.html',
  styleUrls: ['./session-slideshow.component.css']
})
export class SessionSlideshowComponent implements OnInit {


  constructor(private pptFetch: PresentationfetchService, private route: ActivatedRoute, private router: Router, private data: DataService, public sanitizer: DomSanitizer ) { }

  private _flag;
  ppt: [{'slide': string, 'link': any}]
  modnum = 1

  @Input() 
	set isOn(flag: boolean) {
	    this._flag = flag;
	  }
	  get isOn(): boolean { return this._flag; }

	@Input()  currentStep: number | string;
	
	@Output() stepChange = new EventEmitter<number>();
	


  getPpts(modNum): any {
	  return this.pptFetch.getPresentation(modNum);
	}  

	ngOnInit() {
		this.data.currentSession.subscribe(value => {
	  		this.modnum = value;
	  		
	  	})
		this.ppt = this.route.snapshot.data['ppt'];

		// The following loop is necessary to convert normal url strings (videos) into sanitized URL objects.
		for(var index = 0; index < this.ppt.length; index++){			
			this.ppt[index].link = this.sanitizer.bypassSecurityTrustResourceUrl(this.ppt[index].link)		
		}
		this.initReveal( this.router);
		
  	}

	initReveal(router): void {

	
	Reveal.slide(0)	
	Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv

		if (Reveal.isLastSlide()) {
			router.navigate(['/reload'])
    			.then(()=>{router.navigate(['/user/doc'])});			
		}
		
	});

	}

}

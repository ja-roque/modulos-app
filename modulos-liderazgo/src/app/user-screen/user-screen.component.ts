import { Component, OnInit } from '@angular/core';
import { ModulefetchService } from '../modulefetch.service';
import { DataService } from '../data.service';
import { SessionSlideshowComponent} from '../session-slideshow/session-slideshow.component';
import { Router, Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

declare var Reveal:any;


@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  isOn: boolean = true;
  modules: {}
  modnum = 1;
  currentStep = 1;

  constructor(private moduleFetch: ModulefetchService, private data: DataService, private router: Router) { }

	getModules(): any {
		return this.moduleFetch.getModules();
	}

	goTo(val) {
		let num = this.modnum;
		console.log({num, val});
		this.data.changeSession(val);
		console.log(this.modnum);
		// this.router.navigate(['/user/presentation/?step=' + this.modnum]);

		this.router.navigate(['/reload'])
    	.then(()=>{this.router.navigate(['/user/presentation'])})

	}



  ngOnInit() {

  	this.data.currentSession.subscribe(value => this.modnum = value)
  
	this.getModules().subscribe(data => {      
			this.modules = data			
			console.log(this.modules)
			Reveal.configure({viewDistance: 3});
			console.log(Reveal)
	});

	Reveal.initialize({// The "normal" size of the presentation, aspect ratio will be preserved
			// when the presentation is scaled to fit different resolutions
			width: 960,
			height: 700,

			// Factor of the display size that should remain empty around the content
			margin: 0.1,

			// Bounds for smallest/largest possible scale to apply to content
			minScale: 0.2,
			maxScale: 1.0,

			// Display controls in the bottom right corner
			controls: true,		
			controlsTutorial: true,

			// Display a presentation progress bar
			progress: true,

			// Display the page number of the current slide
			slideNumber: false,

			// Push each slide change to the browser history
			history: false,

			// Enable keyboard shortcuts for navigation
			keyboard: true,

			// Enable the slide overview mode
			overview: true,

			// Vertical centering of slides
			center: true,

			// Enables touch navigation on devices with touch input
			touch: true,

			// Loop the presentation
			loop: false,

			// Change the presentation direction to be RTL
			rtl: false,

			// Turns fragments on and off globally
			fragments: true,

			// Flags if the presentation is running in an embedded mode,
			// i.e. contained within a limited portion of the screen
			embedded: false,

			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,

			// Stop auto-sliding after user input
			autoSlideStoppable: true,

			// Enable slide navigation via mouse wheel
			mouseWheel: false,

			// Apply a 3D roll to links on hover
			rollingLinks: false,

			// Hides the address bar on mobile devices
			hideAddressBar: true,

			// Opens links in an iframe preview overlay
			previewLinks: false,

			// Focuses body when page changes visiblity to ensure keyboard shortcuts work
			focusBodyOnPageVisiblityChange: true,

			// Theme (see /css/theme)
			theme: "black",

			// Transition style
			transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

			// Transition speed
			transitionSpeed: 'default', // default/fast/slow

			// Transition style for full page slide backgrounds
			backgroundTransition: 'default', // default/linear/none

			// Parallax background image
			parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

			// Parallax background size
			parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

			// Number of slides away from the current that are visible
			viewDistance: 3,
	});

	Reveal.slide(0)

  }

}

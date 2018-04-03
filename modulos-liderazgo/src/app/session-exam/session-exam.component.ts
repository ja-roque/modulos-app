import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ExamfetchService } from '../examfetch.service';
import { DataService } from '../data.service';


import { PostExamAnswersService } from '../post-exam-answers.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
declare var Reveal:any;
declare var $:any;

@Component({
  selector: 'app-session-exam',
  templateUrl: './session-exam.component.html',
  styleUrls: ['./session-exam.component.css']
})
export class SessionExamComponent implements OnInit {
	inputAnswer: string = '';
	exam = {
		"questions": []
	}
	examJSON = {
	  "questions": []
	} // shows question number and the answers from the user.

  constructor(private examFetch: ExamfetchService, private postAnswers: PostExamAnswersService, 
  			  private route: ActivatedRoute, private router: Router, private data: DataService) { }

  	getExams(): any {
  	   // Fetches the exams data to display in presentation.
	  return this.examFetch.getExam(1);
	} 


	// This function is deprecated, it is still called, but the array es later on overridden.
	answer(num,answer) {
		// This function appends each question number, correct answer and its respective  user answer while user is taking the exam.
		// "ca" stands for Correct Answer
		// "ua" stands for User Answer		
		console.log(this.exam, 'This is the first exam gotten')
		this.examJSON.questions[num] = {'ua':answer, 'ca': parseInt(this.exam.questions[num][2])};
	} 

	calcResult(examAnswers){
		// As function name states, it calculates the final score of the exam.
		let answerLen = this.examJSON.questions.length;
		var points = 0;
		var totalScore = 0;
		var sessionNumber;
		
		this.data.currentSession.subscribe(value => {
		  	sessionNumber = value;
		 })
		// minScore is the minimum amount of correct answers user must get.
		var minScore = Math.trunc(answerLen*0.7);
		for(let i = 0; i < answerLen ; i++){
			// Compares user answer and correct answer
			try {
				if(this.examJSON.questions[i].ua == this.examJSON.questions[i].ca){
					points++;
				}
			}
			catch(err) {
				console.log(err)
			}			
		}	

		totalScore = Math.round(((points/answerLen)*100));
		var set = this.postAnswers.postExamScore(sessionNumber, totalScore);
			set.subscribe(data => {      				
				console.log(data)
			})
		if (points > minScore) {
			// User passed the exam, post score to DB.
			alert("Examen Aprobado, ahora puedes continuar al siguiente modulo!")
		} else{
			// User didnt pass the exam display message and reroute to exam screen.
			alert("Examen Reprobado, para poder continuar al siguiente modulo debes repetir el examen.")
		}
	}

	ngOnInit() {
		// Get exam data through resolver to make sure data exists before HTML rendering occurs.
		this.exam = this.route.snapshot.data['exam'];
		console.log(this.exam)

		// Creates the exam answers array with null values in case an answer is not selected.
		let LEN = this.exam.questions.length;
		for(let i = 0; i < LEN ; i++){
			this.examJSON.questions.push(null); 
		}
		Reveal.initialize()
		this.initReveal(this.router, LEN)
  	}

	initReveal(this, router, LEN): void {
		var vars = this;		
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
			overview: false,

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
	});

	Reveal.addEventListener( 'slidechanged', function( event ) {	
		if (Reveal.isLastSlide()) {
			// code...
			alert('Fin del modulo');

			let userAnswers: any[]  = []
			$(':radio:checked').each(function(){
			   
			userAnswers.push( $(this).val() )			

			// With this Jquery loop we make sure all of the selected values are sent.
			for(var num = 0; LEN > num; num++){
				vars.examJSON.questions[num] = {'ua':userAnswers[num], 'ca': parseInt(vars.exam.questions[num][2])};
			}			   
			   
			});
			console.log(vars.examJSON, 'this is the final parsed exam')
			vars.calcResult(vars.examJSON);
			
			/// Answers input from the user should be in => vars.examJSON
			/// if one of the answers inside the'questions' array is NULL it means the user did not answer that question.
			router.navigate(['/reload'])
    			.then(()=>{router.navigate(['user/bibliografia'])});
		}
		
	});

	}

}

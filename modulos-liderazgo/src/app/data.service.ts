import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	private sessionSource = new BehaviorSubject<number>(1);
	currentSession = this.sessionSource.asObservable();

	private userProfileRequested = new BehaviorSubject<number>(1);
	requestedProfile = this.userProfileRequested.asObservable();

  constructor() { }

  changeSession(value: number) {
  	this.sessionSource.next(value)
  }

  setRequestedProfile(value: number) {
  	this.userProfileRequested.next(value)
  }

}

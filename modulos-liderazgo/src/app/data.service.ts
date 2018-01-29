import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	private sessionSource = new BehaviorSubject<number>(1);
	currentSession = this.sessionSource.asObservable(;)

  constructor() { }

  changeSession(value: number) {
  	this.sessionSource.next(value)
  }

}

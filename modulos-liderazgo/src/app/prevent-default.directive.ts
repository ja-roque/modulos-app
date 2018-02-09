import { Directive , HostListener} from '@angular/core';

@Directive({
  selector: '[appPreventDefault]'
})
export class PreventDefaultDirective {

  constructor() { }

  @HostListener('click',['$event']) onClick(e){
      // this._isOpen = !this._isOpen;
      console.log("jklclkjkjlcaskjl");
      return false;
  }

}

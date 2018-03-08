import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { AppComponent } from '../app.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-topbanner',
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.css']
})
export class TopbannerComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(private appVars: AppComponent,
              private modalService:   BsModalService ) { }

  ngOnInit() {
  }

  openInfo(template: any){
    var config = {
        animated: true,
        keyboard: true,
        backdrop: true,
        ignoreBackdropClick: false
      };

      const initialState = {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],        
        title: 'Reporte de Progreso'
      };
      this.bsModalRef = this.modalService.show(template, Object.assign({initialState}, config, { class: 'gray clearfix' }));
      this.bsModalRef.content.closeBtnName = 'Close'; 
      console.log(this.bsModalRef)
  }

}

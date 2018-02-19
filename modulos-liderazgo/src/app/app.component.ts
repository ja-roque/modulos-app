import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Modulos de Liderazgo';

  // This extracts the forwarded subdomain from Godaddy as github pages root directory is set to sub-directory a normal CNAME record cannot be set.
  company = window.location.ancestorOrigins[0].split('.')[0].split('/')[2];
}

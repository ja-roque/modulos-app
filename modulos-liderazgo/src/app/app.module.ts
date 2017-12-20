import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopbannerComponent } from './topbanner/topbanner.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HightLightDirective } from './hight-light.directive';
import { ShowMovieDirective } from './show-movie.directive';




@NgModule({
  declarations: [
    AppComponent,
    HightLightDirective,
    ShowMovieDirective,
  
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

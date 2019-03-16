import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HightLightDirective } from './hight-light.directive';
import { ShowMovieDirective } from './show-movie.directive';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TheWidthDirective } from './sign-up/the-width.directive';




@NgModule({
  declarations: [
    AppComponent,
    HightLightDirective,
    ShowMovieDirective,
    SignUpComponent,
    TheWidthDirective,
  
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

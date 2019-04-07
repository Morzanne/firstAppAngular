import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HightLightDirective } from './hight-light.directive';
import { ShowMovieDirective } from './show-movie.directive';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TheWidthDirective } from './sign-up/the-width.directive';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.routes';





@NgModule({
  declarations: [
    AppComponent,
    HightLightDirective,
    ShowMovieDirective,
    SignUpComponent,
    TheWidthDirective,
    UserProfileComponent,
    MenuComponent,
  
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

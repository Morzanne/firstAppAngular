import { Component, OnInit  } from '@angular/core';
import { Email  } from './email';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  email: Email = {
    adresse: "Enter your email here !",
    user:"",
    emailAdress:"",
    
    
  }
  

  constructor() { }

  ngOnInit(){
    

  }
  
  onSubmit(){
    alert("Formulaire soumis !");
  }


}

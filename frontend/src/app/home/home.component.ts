import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router) { 
    const token = sessionStorage.getItem('jsessionid');

    

    //test if token is valid
    if(token === null || JSON.parse(token).expires_in < new Date().getTime()){
      router.navigateByUrl('/login');
    }

  }


}

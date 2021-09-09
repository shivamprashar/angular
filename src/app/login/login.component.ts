import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router : Router) { }
  public username ="";
  public password ="";

  ngOnInit(): void {
  }
  checklogin()
  {
    if( this.username=== 'admin' &&  this.password === '123')
    {
      this.router.navigate(['/home']);
      // alert("Welcome " + this.username);

    }
  }

}

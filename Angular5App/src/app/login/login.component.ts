import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    console.log(event);
    var username = event.target.elements[0].value;
    var password = event.target.elements[1].value;

    if(username == 'admin' && password == 'admin')
      this.router.navigate(['carparts']);
    else
      alert('Invalid user data!');
  }


}

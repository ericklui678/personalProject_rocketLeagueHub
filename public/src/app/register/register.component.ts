import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  user = {
    'username': '',
    'email': '',
    'password': '',
  }

  constructor() { }

  onSubmit(form) {
    if (form.valid) {
      console.log('submitting');
    }
  }
}

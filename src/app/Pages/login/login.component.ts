import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { validation } from '../../../services/validation.service';

@Component({
  selector: 'app-login-signin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model: any = {
    email: '',
    password: ''
  };

  constructor(private router: Router, 
    // private validation: validation
  ) {}

  onSignIn(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      console.log(form.value);
      return;
    }

    // Validate credentials using the validation
    // const user = this.validation.validateUser(this.model.email, this.model.password);
    // if (user) {
    //   // If the user is valid, navigate to profile or dashboard
    //   console.log('User authenticated:', user.name);
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   // Show an alert or error message if the credentials are invalid
    //   alert('Invalid email or password. Please try again.');
    // }
  }
}

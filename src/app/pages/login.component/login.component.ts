import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.Service/auth-service';

@Component({
  imports: [ ReactiveFormsModule ],
  selector: 'app-login.component',
  styleUrl: './login.component.scss',
  templateUrl: './login.component.html',
})
export class LoginComponent {

// private readonly formBuilder = inject(FormBuilder);
// private readonly authService = inject(AuthService);

  // loginForm = this.formBuilder.group({
  //   email: [null, [Validators.required, Validators.email]],
  //   password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
  // });


  // onSubmit() {
  //   this.authService.login(this.loginForm.value).subscribe({
  //     next: (res) => {
  //       console.log('Login successful:', res);
  //     },
  //     error: (err) => {
  //       console.error('Login failed:', err);
  //     }
  //   });
  // }
}

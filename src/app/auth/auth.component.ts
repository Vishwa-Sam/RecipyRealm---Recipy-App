import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthResponseData, AuthService } from './auth.service';
import { AuthSpinnerComponent } from '../shared/auth-spinner/auth-spinner.component';
import { AlertMessageComponent } from '../shared/alert-message/alert-message.component';
import { contentFadeInOut } from '../landingpage/landingpage.animations';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    AuthSpinnerComponent,
    CommonModule,
    AlertMessageComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  animations: [contentFadeInOut],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  islogginPage = true;
  isLoading = false;
  passwordsMatch = true;
  error = signal(null);
  password = signal('');
  confirmPassword = signal('');

  private authService = inject(AuthService);
  private route = inject(Router);

  onSwicthPage() {
    this.islogginPage = !this.islogginPage;
  }

  checkPasswords(password: string, confirmPassword: string) {
    this.passwordsMatch = password === confirmPassword;
  }

  closeError() {
    this.error.set(null);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const { email, name, password, confirmPassword } = form.value;
    if (!this.islogginPage && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.isLoading = true;
    let authObservable: Observable<AuthResponseData>;

    if (this.islogginPage) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signup(email, password);
    }
    authObservable.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.route.navigate(['/recipes']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error.set(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
    this.password.set('');
    this.confirmPassword.set('');
    this.passwordsMatch = true;
  }
}

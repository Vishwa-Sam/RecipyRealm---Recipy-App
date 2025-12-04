import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-spinner',
  standalone: true,
  imports: [],
  template: `<img src="assets/loading.gif" alt="Loader" />`,
  styleUrls: ['./auth-spinner.component.css'],
})
export class AuthSpinnerComponent {}

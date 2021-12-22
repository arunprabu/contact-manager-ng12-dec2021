import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root', // exposed in a selector -- mandatory
  templateUrl: './app.component.html', // html  -- mandatory - only one
  styleUrls: ['./app.component.css'] // css -- optional -- can be multiple
})
export class AppComponent {
  // ts
  title = 'contact-manager-ng12-dec2021';
}

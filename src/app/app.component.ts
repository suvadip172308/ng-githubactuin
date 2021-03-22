import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular CI/CD Lab';
  description = 'Hi! Test Angular CI/CD is working on Github Action with heroku deployment';
}

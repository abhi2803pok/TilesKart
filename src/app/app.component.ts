import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tileKart33';
  employee = {
    name: 'Sri',
    age: 30,
    married: true,
  };
}

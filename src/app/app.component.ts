import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upc-pre-si729-sv54-sportease-web-application';
  pages = [
    { path: '/student-group', title: 'Student Group' },
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upc-pre-si729-sv54-sportease-web-application';
  pages = [
    { path: '/home-administrators', title: 'Home Administrators' },
    { path: '/home-students', title: 'Home Students' },
    { path: '/category-management', title: 'Category Management' },
    ]
}

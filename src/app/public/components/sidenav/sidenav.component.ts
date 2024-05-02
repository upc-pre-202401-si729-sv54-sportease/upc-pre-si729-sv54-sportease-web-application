import {Component, OnInit} from '@angular/core';
import {AdministratorService} from "../../services/administrator/administrator.service";
import {Administrator} from "../../model/administrator/administrator.entity";
import {Router} from "@angular/router";
import {Student} from "../../model/student/student.entity";
import {StudentService} from "../../services/student/student.service";
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent implements OnInit{

  isAdminUrl(){
    return this.router.url === '/home-administrators' || this.router.url === '/category-management' || this.router.url.includes('/students-management');
  }

  isStudentUrl(){
    return this.router.url === '/home-students';
  }

  administrator: Administrator = {} as Administrator;
  student: Student = {} as Student;
  constructor(private administratorService: AdministratorService, private router: Router, private StudentService: StudentService) { }
  ngOnInit(): void {
    this.administratorService.getAdministratorData(1).subscribe(admin => {
      this.administrator = admin;
    });

    this.StudentService.getStudentData(1).subscribe(student => {
      this.student = student;
    });
  }

  goToProfile() {
    console.log('Go to profile');
  }

  goToHomeAdmin(){
    this.router.navigate(['/home-administrators']);
  }

  goToHomeStudent(){
    this.router.navigate(['/home-students']);
  }

  goToAttendance(){
    this.router.navigate(['/home-students']);
  }

  goToPayments(){
    console.log('Go to payments');
  }
}

import {Component, OnInit} from '@angular/core';
import {AdministratorService} from "../../../profiles/services/administrator/administrator.service";
import {Administrator} from "../../../profiles/model/administrator/administrator.entity";
import {Router} from "@angular/router";
import {Student} from "../../../profiles/model/student/student.entity";
import {StudentService} from "../../../profiles/services/student/student.service";
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent implements OnInit{

  isAdminUrl(){
    return this.router.url === '/home-administrators';
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

  goToHome(){
    this.router.navigate(['/home-administrators']);
  }

  goToAttendance(){
    this.router.navigate(['/home-students']);
  }

  goToPayments(){
    console.log('Go to payments');
  }
}

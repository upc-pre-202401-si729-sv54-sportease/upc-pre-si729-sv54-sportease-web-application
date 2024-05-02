import {Component, OnInit} from '@angular/core';
import {AdministratorService} from "../../../profiles/services/administrator/administrator.service";
import {Administrator} from "../../../profiles/model/administrator/administrator.entity";
import {Router} from "@angular/router";
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent implements OnInit{

  administrator: Administrator = {} as Administrator;
  constructor(private administratorService: AdministratorService, private router: Router) { }

  ngOnInit(): void {
    this.administratorService.getAdministratorById(2).subscribe(admin => {
      this.administrator = admin;
    });
  }

  type = 'Administrator';

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

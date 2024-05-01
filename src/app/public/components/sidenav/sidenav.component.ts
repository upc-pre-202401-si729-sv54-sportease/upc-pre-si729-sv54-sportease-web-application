import {Component, OnInit} from '@angular/core';
import {Administrator} from "../../../profiles/model/administrator/administrator.entity";
import {AdministratorService} from "../../../profiles/services/administrador/administrator.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit{
  administrator: Administrator = {} as Administrator;
  constructor(private administratorService: AdministratorService) { }

  ngOnInit(): void {
    this.administratorService.getAdministratorById(1).subscribe(admin => {
      this.administrator = admin;
    });
  }

  type = 'Administrator';

  goToProfile() {
    console.log('Go to profile');
  }

  goToHome(){
    console.log('Go to home');
  }

  goToAttendance(){
    console.log('Go to attendance');
  }

  goToPayments(){
    console.log('Go to payments');
  }
}

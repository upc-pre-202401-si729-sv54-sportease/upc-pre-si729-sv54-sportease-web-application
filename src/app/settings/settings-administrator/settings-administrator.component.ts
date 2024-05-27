import {Component, OnInit} from '@angular/core';
import {Administrator} from "../../public/model/administrator/administrator.entity";
import {AdministratorService} from "../../public/services/administrator/administrator.service";


@Component({
  selector: 'app-settings-administrator',
  templateUrl: './settings-administrator.component.html',
  styleUrl: './settings-administrator.component.css'
})
export class SettingsAdministratorComponent implements OnInit{
  administrator: Administrator = {} as Administrator;
  constructor(private administratorService:AdministratorService) {}

  ngOnInit(): void {
    this.getAllAdministrator();
  }

  private getAllAdministrator() {
    this.administratorService.getAdministratorData(1).subscribe((admin: Administrator) => {
      this.administrator = admin;
    })
  }
}

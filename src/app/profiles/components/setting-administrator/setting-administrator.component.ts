import {Component, OnInit} from '@angular/core';
import {Administrator} from "../../model/administrator/administrator.entity";
import {AdministratorService} from "../../services/administrator/administrator.service";


@Component({
  selector: 'app-setting-administrator',
  templateUrl: './setting-administrator.component.html',
  styleUrl: './setting-administrator.component.css'
})
export class SettingAdministratorComponent implements OnInit{
  administrator: Administrator = {} as Administrator;
  constructor(private administratorService:AdministratorService) {}

  ngOnInit(): void {
    this.getAllAdministrator();
  }

  private getAllAdministrator() {
    this.administratorService.getAdministratorById(1).subscribe(admin => {
      this.administrator = admin;
    })
}
}

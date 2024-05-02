import {Component, OnInit} from '@angular/core';
import {AdministratorService} from "../../services/administrator/administrator.service";
import {Administrator} from "../../model/administrator/administrator.entity";

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrl: './category-management.component.css'
})
export class CategoryManagementComponent implements OnInit{
  administrator: Administrator = {} as Administrator;
  constructor(private administratorService: AdministratorService) { }

  ngOnInit(): void {
    this.getAllAdministrator();
  }

  private getAllAdministrator() {
    this.administratorService.getAdministratorById(1).subscribe( admin => {
      this.administrator = admin;
      console.log(this.administrator);
    });
  }
}

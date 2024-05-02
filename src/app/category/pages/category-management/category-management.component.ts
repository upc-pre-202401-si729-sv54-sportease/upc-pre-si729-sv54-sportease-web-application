import {Component, OnInit} from '@angular/core';
import {AdministratorService} from "../../services/administrator/administrator.service";
import {Administrator} from "../../model/administrator/administrator.entity";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddCategoryDialogComponent} from "../../components/add-category-dialog/add-category-dialog.component";

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrl: './category-management.component.css'
})
export class CategoryManagementComponent implements OnInit{
  administrator: Administrator = {} as Administrator;
  constructor(private administratorService: AdministratorService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllAdministrator();
  }

  private getAllAdministrator() {
    this.administratorService.getAdministratorById(1).subscribe( admin => {
      this.administrator = admin;
      console.log(this.administrator);
    });
  }

  viewStudentsToCategory(yearCategory: number){
    this.router.navigate(['students-management', yearCategory]);
  }

  openAddCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.administrator.categories.push(result);
      }
    });
  }
}

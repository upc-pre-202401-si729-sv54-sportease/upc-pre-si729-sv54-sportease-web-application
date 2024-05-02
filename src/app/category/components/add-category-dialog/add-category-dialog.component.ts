import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrl: './add-category-dialog.component.css'
})
export class AddCategoryDialogComponent implements OnInit{
  categoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddCategoryDialogComponent>) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      yearCategory: ['', Validators.required],
      nameProfessor: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      this.dialogRef.close(this.categoryForm.value);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

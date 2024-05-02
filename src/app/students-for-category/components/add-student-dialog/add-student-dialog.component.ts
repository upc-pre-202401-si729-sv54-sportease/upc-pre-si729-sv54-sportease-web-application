import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrl: './add-student-dialog.component.css'
})
export class AddStudentDialogComponent implements OnInit{
  studentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddStudentDialogComponent>
  ) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      category: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      this.dialogRef.close(this.studentForm.value);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

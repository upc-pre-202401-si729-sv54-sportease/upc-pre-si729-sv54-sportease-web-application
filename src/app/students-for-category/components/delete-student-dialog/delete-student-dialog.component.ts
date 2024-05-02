import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-student-dialog',
  templateUrl: './delete-student-dialog.component.html',
  styleUrl: './delete-student-dialog.component.css'
})
export class DeleteStudentDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteStudentDialogComponent>) {}

  /*SE PUEDE BORRRAR ESTOS METODOS, YA QUE USAMOS <mat-dialog-actions align="end">
  onCancel(): void {
    this.dialogRef.close(false);
  }

  onDelete(): void {
    this.dialogRef.close(true);
  }*/
}

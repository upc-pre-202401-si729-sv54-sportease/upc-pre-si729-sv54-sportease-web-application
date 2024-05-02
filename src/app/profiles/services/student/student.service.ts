import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Student} from "../../model/student/student.entity";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private baseService: BaseService<Student>) {}

  getStudentData(id: any) {
    return this.baseService.getAdministratorById(id, 0);
  }

  getAllStudents(){
    return this.baseService.getAll(0);
  }
}

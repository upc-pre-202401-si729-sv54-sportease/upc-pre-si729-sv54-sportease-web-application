import { Injectable } from '@angular/core';
import {Student} from "../model/student/student.entity";
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService<Student>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/sportEase-student/student';
  }
}

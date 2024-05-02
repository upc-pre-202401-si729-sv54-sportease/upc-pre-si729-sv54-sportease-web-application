import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Administrator} from "../../../category/model/administrator/administrator.entity";
import {HttpClient} from "@angular/common/http";
import {Student} from "../../model/student/student.entity";

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService<Student>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/student';
  }
}

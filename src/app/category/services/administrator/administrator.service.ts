import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Administrator} from "../../model/administrator/administrator.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdministratorService extends BaseService<Administrator>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/sportEase-managment/administrator';
  }
}

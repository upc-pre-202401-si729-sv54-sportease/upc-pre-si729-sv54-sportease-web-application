import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Administrator} from "../../model/administrator/administrator.entity";

@Injectable({
  providedIn: 'root'
})
export class AdministratorService extends BaseService<Administrator> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/sportEase-managment/administrator';
  }
}

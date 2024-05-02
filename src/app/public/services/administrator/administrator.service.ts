import {Injectable} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Administrator} from "../../model/administrator/administrator.entity";

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  constructor(private baseService: BaseService<Administrator>) {}

  getAdministratorData(id: any) {
    return this.baseService.getAdministratorById(id, 1);
  }
}

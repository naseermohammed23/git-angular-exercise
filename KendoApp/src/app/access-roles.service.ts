import { Injectable } from '@angular/core';
import {masterData} from '../assets/master-template';

@Injectable()
export class AccessRolesService {

  public masterData: any[] = masterData;

  public savedCheckedKeys: any[] = [];

  constructor() { }

}

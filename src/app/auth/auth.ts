
import { Role } from '../shared/tabular';

export interface Auth {
    userid: string,
    cn: string,
    sn: string,
    email: string,
    password: string,
    empNo: string,
    department: string,
    roles: string
  
}

export class User {
    role: Role;
  }

 

  

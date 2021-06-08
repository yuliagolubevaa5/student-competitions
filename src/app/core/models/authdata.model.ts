import {RoleEnum} from '../enums/role.enum';

export class AuthData {
  role: RoleEnum;
  // token: string;
  name: string;
  surname: string;
  email: string;
  password: string;
}

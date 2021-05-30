import {Injectable} from '@angular/core';
import {AuthData} from '../models/authdata.model';
import {RoleEnum} from '../enums/role.enum';
import {Router} from '@angular/router';

@Injectable()
export class CurrentUserService {
  private user: AuthData;
  constructor(
    private router: Router
  ) {
    if (localStorage.length) {
      const data = localStorage.getItem('user');
      if (data) {
        this.user = JSON.parse(data);
      }
    }
  }

  // setUser(user: AuthData, isLogged?: boolean) {
  //   localStorage.setItem('user', JSON.stringify(user));
  //   localStorage.setItem('token', user.token);
  //   this.user = user;
  //   if (isLogged) {
  //     let route = '';
  //     switch (user.role) {
  //       case RoleEnum.Admin:
  //         route = RoutesEnum.AdminFirstRoute;
  //         break;
  //       case RoleEnum.SuperAdmin:
  //         route = RoutesEnum.AdminFirstRoute;
  //         break;
  //       default :
  //         route = RoutesEnum.UserActivateFirstRoute;
  //         if (!user.emailConfirmed) {
  //           route = RoutesEnum.UserDontActivateFirstRoute;
  //         }
  //         break;
  //     }
  //     this.router.navigate([route]);
  //   }
  // }
  //
  // public getUser(): AuthData {
  //   return this.user;
  // }
  //
  // public logOut() {
  //   localStorage.clear();
  //   this.user = undefined;
  //   this.router.navigate(['auth/login']);
  // }
  //
  // public init(user: AuthData) {
  //   this.user = user;
  //   let route = '';
  //   switch (user.role) {
  //     case RoleEnum.Admin:
  //       route = RoutesEnum.AdminFirstRoute;
  //       break;
  //     case RoleEnum.SuperAdmin:
  //       route = RoutesEnum.AdminFirstRoute;
  //       break;
  //     default :
  //       route = RoutesEnum.UserActivateFirstRoute;
  //       if (!user.emailConfirmed) {
  //         route = RoutesEnum.UserDontActivateFirstRoute;
  //       }
  //       break;
  //   }
  //   this.router.navigate([route]);
  // }
}

import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {RoleEnum} from '../enums/role.enum';

export class UserGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let user = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      if (user['role'] === RoleEnum.Teacher || user['role'] === RoleEnum.Student) {
        return true;
      }
    }

    this.router.navigate(['/users'], { queryParams: { returnUrl: state.url } });
  }
}

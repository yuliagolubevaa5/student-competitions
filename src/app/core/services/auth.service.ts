import {ApiService} from './api.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthData} from '../models/authdata.model';

const basePath = '/Account';
const login = `${basePath}/Login`;

@Injectable()
export class AuthorizationService {

  constructor(private api: ApiService) {}

  public LogIn(user: any): Observable<AuthData> {
    return this.api.post(`${login}`, user);
  }
}

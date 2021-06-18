import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

const rootPath = `/api/v1`;
const getUser = `${rootPath}/getUserById`;

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(
    private api: ApiService
  ) {}

  public getUserById(id: '5'): Observable<any> {
    return this.api.get(`${getUser}?id=${id}`);
  }

}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';

const rootPath = `/api/v1`;
const getStudentCompetitions = `${rootPath}/getCompetenceById`;

@Injectable({
  providedIn: 'root'
})

export class CompetitionsService {
  constructor(
    private api: ApiService
  ) {}

  public getCompetenceById(id: '5'): Observable<any> {
    return this.api.get(`${getStudentCompetitions}?id=${id}`);
  }

}

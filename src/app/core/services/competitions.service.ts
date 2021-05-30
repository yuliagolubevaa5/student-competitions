import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';

const rootPath = `/api/`;

const getStudentCompetitions = `${rootPath}`;

@Injectable({
  providedIn: 'root'
})

export class CompetitionsService {
  constructor(
    private api: ApiService
  ) {}

  public getCompetitions(studentId): Observable<any[]> {
    return this.api.get(`${getStudentCompetitions}?studentId=${studentId}`);
  }

}

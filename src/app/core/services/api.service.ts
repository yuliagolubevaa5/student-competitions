import {Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public host = '';

  constructor(
    private httpClient: HttpClient
  ) {}

  public createHeader(): any {
    return {
      // Authorization: 'Bearer ' + this.getToken(),
      // 'Cache-Control': 'no-cache',
      // 'Pragma': 'no-cache',
      // 'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
    };
  }


  public get(url: string): Observable<any> {
    return this.httpClient
      .get(`${BASE_URL}${url}`)
      .pipe(map(data => {
        return data;
      }), catchError(err => {
        return this.handleError(err);
      }));
  }

  public post(url: string, data): Observable<any> {
    return this.httpClient
      .post(`${this.host}${url}`, data, { headers: this.createHeader()})
      .pipe(map((res) => {
        return res;
      }), catchError(err => {
        return this.handleError(err);
      }));
  }

  private handleError(error: any): Observable<any> {
    if (error.status === 401) {
      // location.reload();
      alert('401');
    } else {
      return throwError(error);
    }
  }
}

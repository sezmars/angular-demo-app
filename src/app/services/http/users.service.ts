import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '~environments/environment';
import { IUser } from '~interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<Partial<IUser[]>> {
    return this.http
      .get<{
        results: Partial<IUser[]>;
      }>(`${environment.randomUserApi}?results=10`)
      .pipe(map(data => data.results));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IUser} from "~interfaces/user";

/**
 * Use the environment.ts correctly
 * */
const URL = `https://randomuser.me/api/`

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<Partial<IUser[]>> {
    return this.http.get<{
      results: Partial<IUser[]>
    }>(`${URL}?results=10`)
      .pipe(map((data) => data.results))
  }
}

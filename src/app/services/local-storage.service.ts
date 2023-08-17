import {Injectable} from '@angular/core';
import {IUser} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public saveData(key: string, data: IUser) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getData(key: string): IUser {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public clearData(key: string) {
    localStorage.removeItem(key);
  }
}

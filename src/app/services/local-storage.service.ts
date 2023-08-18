import {Injectable} from '@angular/core';
import {IUser} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public saveData(key: string, data: IUser) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  }

  public getData(key: string): IUser | null {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  public clearData(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  }
}

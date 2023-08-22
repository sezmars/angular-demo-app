import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IUser } from '~interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private savedUsers$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>(
    []
  );

  constructor() {
    this.updateSavedUsers();
  }

  public saveData(key: string, data: IUser): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      this.updateSavedUsers();
    } catch (e) {
      console.error(e);
    }
  }

  public getData(key: string): Observable<IUser | null> {
    try {
      const data = localStorage.getItem(key);
      return data
        ? new BehaviorSubject<IUser>(JSON.parse(data))
        : new BehaviorSubject<null>(null);
    } catch (e) {
      console.error(e);
      return new BehaviorSubject<null>(null);
    }
  }

  public clearStore(): void {
    try {
      localStorage.clear();
      this.updateSavedUsers();
    } catch (e) {
      console.error(e);
    }
  }

  public getSavedUsersFromLocalStorage(): Observable<IUser[]> {
    return this.savedUsers$.asObservable();
  }

  private updateSavedUsers(): void {
    const savedUsers: IUser[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) {
        const userData = JSON.parse(localStorage.getItem(key)!);
        savedUsers.push(userData);
      }
    }
    this.savedUsers$.next(savedUsers);
  }
}

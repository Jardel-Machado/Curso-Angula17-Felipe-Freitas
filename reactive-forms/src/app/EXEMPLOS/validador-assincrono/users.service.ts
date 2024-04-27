
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}

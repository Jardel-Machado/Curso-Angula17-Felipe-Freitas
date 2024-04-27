import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../interfaces/user-response.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly httpCliente: HttpClient) {}

  buscarUsuarioPorId(userId: number): Observable<UserResponse> {
    return this.httpCliente.get<UserResponse>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
  buscarUsuarios(): Observable<UserResponse[]> {
    return this.httpCliente.get<UserResponse[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }

  getUser(): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        });
      }, 3000);
    });
  }
}

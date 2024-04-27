import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpCliente: HttpClient) { }

  getUsers(): Observable<{name: string}[]>{
    return this.httpCliente.get<{ name: string }[]>('https://jsonplaceholder.typicode.com/users');
  }
}

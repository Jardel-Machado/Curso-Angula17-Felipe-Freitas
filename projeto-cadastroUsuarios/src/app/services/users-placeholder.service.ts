import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersPlaceholderListResponse } from '../types/users-placeholder-list-response';

@Injectable({
  providedIn: 'root',
})
export class UsersPlaceholderService {
  constructor(private readonly httpClient: HttpClient) {}

  getUsersPlaceholder(): Observable<UsersPlaceholderListResponse> {
    return this.httpClient.get<UsersPlaceholderListResponse>('https://jsonplaceholder.typicode.com/users'
    );
  }
}

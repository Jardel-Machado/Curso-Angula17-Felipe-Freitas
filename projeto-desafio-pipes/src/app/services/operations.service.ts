import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IOperationResponse } from '../interfaces/operation-response.interface';
import { OperationsListResponseMock } from '../mocks/operations-list-response.mock';


@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  getOperations(): Observable<IOperationResponse[]> {
    return of(OperationsListResponseMock);
  }
}

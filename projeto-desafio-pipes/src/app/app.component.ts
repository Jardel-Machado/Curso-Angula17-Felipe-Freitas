import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IOperationResponse } from './interfaces/operation-response.interface';
import { OperationsService } from './services/operations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  // operationsList: IOperationResponse[] = [];

  searchTerm: string = '';

  //* Resolvendo com asyncPipe:
  operationsList$: Observable<IOperationResponse[]> | undefined;

  constructor(private readonly operationsService: OperationsService) {}

  ngOnInit(): void {
    // this.getOperations();

    //* Resolvendo com asyncPipe:
    this.operationsList$ = this.operationsService.getOperations();
  }

  // getOperations(): void {
  //   this.operationsService
  //     .getOperations()
  //     .pipe(take(1))
  //     .subscribe((operationsListResponse) => {
  //       this.operationsList = operationsListResponse;
  //     });
  // }
}

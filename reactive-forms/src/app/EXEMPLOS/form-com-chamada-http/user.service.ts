import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser(): Observable<any>{
    return of({
      nome: 'Jardel',
      idade: 38,
      ativo: true,
      endereco: {
        rua: 'Rua das couves',
        numero: 42
      },
      telefones:[
        {
          numero: 999514718,
          ddd: 27
        },
        {
          numero: 999513145,
          ddd: 11
        }
      ]
    });
  };


}

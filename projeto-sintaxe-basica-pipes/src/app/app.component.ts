import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './interfaces/user.interface';
import { lastValueFrom } from 'rxjs';

export enum UserStatusEnum {
  Inativo = 0,
  Ativo = 1,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  minhaData: string = '2023-10-21T21:00:00.000Z';

  minhaDataObj: Date = new Date('2023-10-21T21:00:00.000Z');

  //*Pipe puro só é atualizado quando o valor do paremetro dele mude. 

  pessoa = {
    nome: 'Jardel',
    idade: 38,
  };

  user = {
    nome: 'Jardel',
    idade: 38,
    status: UserStatusEnum.Ativo,
  };

  users = [
    {
      name: 'Jardel',
      status: 1,
    },
    {
      name: 'Laura',
      status: 0,
    },
    {
      name: 'João',
      status: 1,
    },
    {
      name: 'Maria',
      status: 0,
    },
  ];

  userPromise!: Promise<User>;
  userByIdPromise!: Promise<User>;

  constructor(private readonly usersService: UsersService) {}
  ngOnInit(): void {
    console.log('Data convertida para região: ', new Date(this.minhaData));
    console.log('Data UTC-0: ', new Date(this.minhaData).toUTCString());

    console.log('TimeStamp: ', new Date(this.minhaData).getTime());

    console.log(this.minhaDataObj);

    this.userPromise = this.usersService.getUser();

    this.userByIdPromise = lastValueFrom(
      this.usersService.buscarUsuarioPorId(2)
    );
  }

  inactivateUser(userIndex: number){
    this.users[userIndex].status = 0;
  };

  addUser(){
    this.users.push({
      name: 'Marcos',
      status: 1,
    })
  }
}

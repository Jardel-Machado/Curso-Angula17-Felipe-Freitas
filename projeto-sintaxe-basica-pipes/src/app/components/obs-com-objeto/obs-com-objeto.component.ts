import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserResponse } from '../../interfaces/user-response.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-com-objeto',
  templateUrl: './obs-com-objeto.component.html',
  styleUrl: './obs-com-objeto.component.scss',
})
export class ObsComObjetoComponent implements OnInit, OnDestroy {
  constructor(private readonly usersService: UsersService) {}

  user: UserResponse = {} as UserResponse;

  userSubs: Subscription | undefined;

  user$!: Observable<UserResponse>;

  ngOnInit(): void {
    //*Subscribe manual:
    this.userSubs = this.usersService.buscarUsuarioPorId(1).subscribe({
      next: (userResponse) => {
        this.user = userResponse;
      },
    });

    //*Agora fazendo com Pipe Async:
    this.user$ = this.usersService.buscarUsuarioPorId(2);
  }
  ngOnDestroy(): void {
    this.userSubs && this.userSubs.unsubscribe();
  }

  onBtnClick(userId: number): void {
    this.user$ = this.usersService.buscarUsuarioPorId(userId);
  };
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interfaces';
import { UsersList } from '../../Data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {

  displayedColumns: string[] = ['name', 'date', 'status'];

  @Input({required: true}) usersList: IUser[] = [];

  @Output() userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(user: IUser): void {
    this.userSelectedEmitt.emit(user);
  }
}

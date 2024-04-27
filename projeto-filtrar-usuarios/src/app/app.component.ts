import { Component, OnInit } from '@angular/core';
import { UsersList } from './Data/users-list';
import { IFilterOptions } from './interfaces/filter/filter-options.interface';
import { IUser } from './interfaces/user/user.interfaces';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  userSelected: IUser = {} as IUser;

  showUserDetails: boolean = false;

  usersList: IUser[] = [];

  usersListFiltered: IUser[] = [];

  ngOnInit() {
    this.simularChamadaHttp();
  }

  simularChamadaHttp() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 1000);
  }
  onUserSelected(user: IUser): void {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {

    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
}

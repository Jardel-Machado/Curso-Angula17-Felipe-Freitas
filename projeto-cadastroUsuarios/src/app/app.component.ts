import { Component, OnInit } from '@angular/core';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { GenresService } from './services/genres.service';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list-response';
import { GenresListResponse } from './types/genres-list-response';
import { StatesListResponse } from './types/states-list-response';
import { IUser } from './interfaces/user/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { UsersBeforeAndAfterDialogComponent } from './components/users-before-and-after-dialog/users-before-and-after-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: UsersListResponse = [];

  genresList: GenresListResponse = [];

  statesList: StatesListResponse = [];

  userSelected: IUser = {} as IUser; //* Vai guardar a cópia do usuário selecionado original

  userSelectedIndex: number | undefined;

  constructor(
    private readonly usersService: UsersService,
    private readonly genresService: GenresService,
    private readonly brazilianStatesService: BrazilianStatesService,
    private readonly matDialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
    });
  }
  getGenres() {
    this.genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
    });
  }
  getStates() {
    this.brazilianStatesService.getStates().subscribe((statesListResponse) => {
      this.statesList = statesListResponse;
    });
  }
  onUserSelected(userIndex: number): void {
    const userFound = this.usersList[userIndex];

    if (userFound) {
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound); //* structuredClone cria um clone do objeto
    }
  }

  onFormSubmit() {
    if (this.userSelectedIndex === undefined) {
      return;
    }

    const originalUser = this.usersList[this.userSelectedIndex];

    this.openBeforeAndAfterDialog(
      originalUser,
      this.userSelected,
      this.userSelectedIndex
    );
  }

  openBeforeAndAfterDialog(
    originalUser: IUser,
    updateUser: IUser,
    userSelectedIndex: number
  ) {
    const dialogRef = this.matDialog.open(UsersBeforeAndAfterDialogComponent, {
      data: {
        originalUser: originalUser,
        updateUser: updateUser,
      },
      minWidth: '70%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.confirmUserUpdate(updateUser, userSelectedIndex);
      }
    });
  }

  confirmUserUpdate(updateUser: IUser, userSelectedIndex: number) {
    this.usersList[userSelectedIndex] = structuredClone(updateUser);

    console.group('Alteração finalizada - Lista de usuários atualizado!');

    console.log('Lista de usuários atual', this.usersList);

    console.groupEnd();
  }
}

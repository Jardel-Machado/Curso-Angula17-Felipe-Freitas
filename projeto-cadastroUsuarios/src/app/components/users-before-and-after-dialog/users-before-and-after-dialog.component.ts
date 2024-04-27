import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-before-and-after-dialog',
  templateUrl: './users-before-and-after-dialog.component.html',
  styleUrl: './users-before-and-after-dialog.component.scss',
})
export class UsersBeforeAndAfterDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {originalUser: IUser, updateUser: IUser}
  ) { }
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserResponse } from '../../interfaces/user-response.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obs-com-array',
  templateUrl: './obs-com-array.component.html',
  styleUrl: './obs-com-array.component.scss',
})
export class ObsComArrayComponent implements OnInit {

  users$!: Observable<UserResponse[]>;

  constructor(private readonly usersService: UsersService) {}
  ngOnInit(): void {
    this.users$ = this.usersService.buscarUsuarios();
  }
}

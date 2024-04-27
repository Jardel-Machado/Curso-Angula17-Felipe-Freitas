import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersValidatorService } from './users-validator.service';

@Component({
  selector: 'app-validador-assincrono',
  templateUrl: './validador-assincrono.component.html',
  styleUrl: './validador-assincrono.component.scss',
})
export class ValidadorAssincronoComponent {

  nome = new FormControl('', {
    asyncValidators: [
      this.usersValidatorService.validate.bind(this.usersValidatorService),
    ],
    updateOn: 'blur',
  });

  constructor(private readonly usersValidatorService: UsersValidatorService) {}
}

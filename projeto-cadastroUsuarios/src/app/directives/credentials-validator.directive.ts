import { UsersListResponse } from './../types/users-list-response';
import { Directive, Input, forwardRef } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable, map } from 'rxjs';
import { UsersPlaceholderService } from '../services/users-placeholder.service';

@Directive({
  selector: '[appCredentialsValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => CredentialsValidatorDirective),
      multi: true,
    },
  ],
})
export class CredentialsValidatorDirective implements AsyncValidator {
  @Input('appCredentialsValidator') propToCheck: 'username' | 'email' =
    'username';

  constructor(
    private readonly usersPlaceholderService: UsersPlaceholderService
  ) {}
  validate(
    control: AbstractControl<any, any>
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.usersPlaceholderService.getUsersPlaceholder().pipe(
      map((UsersListResponse) => {
        const hasUser = UsersListResponse.find(
          (user) =>
            user[this.propToCheck].toLowerCase() ===
            control.value.trim().toLowerCase()
        );

        const validatorKey =
          this.propToCheck === 'username' ? 'invalidUsername' : 'invalidEmail';

        return hasUser ? { [validatorKey]: true } : null;
      })
    );
  }
}

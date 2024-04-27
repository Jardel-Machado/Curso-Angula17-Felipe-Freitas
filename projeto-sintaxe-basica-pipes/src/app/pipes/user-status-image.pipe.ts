import { Pipe, PipeTransform } from '@angular/core';
import { UserStatusEnum } from '../app.component';

@Pipe({
  name: 'userStatusImage'
})
export class UserStatusImagePipe implements PipeTransform {

  transform(userStatus: number): string {
    const statusImages: { [key: number]: string} = {
      [UserStatusEnum.Ativo]: 'assets/icons/active-user-icon.png',
      [UserStatusEnum.Inativo]: 'assets/icons/inactive-user-icon.png'
    }
    return statusImages[userStatus];
  }

}

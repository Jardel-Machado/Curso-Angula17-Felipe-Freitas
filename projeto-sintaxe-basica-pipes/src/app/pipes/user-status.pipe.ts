import { Pipe, PipeTransform } from '@angular/core';
import { UserStatusEnum } from '../app.component';

@Pipe({
  name: 'userStatus',
  //*pure: false,
})
export class UserStatusPipe implements PipeTransform {

  transform(userStatus: number): string {
    // if(userStatus === UserStatusEnum.Ativo){
    //   return 'Ativo';
    // }else if(userStatus === UserStatusEnum.Inativo){
    //   return 'Inativo';
    // }else{
    //   return 'Inválido';
    // }

    const userStatusDescription: {[key: number]: string} = {
      [UserStatusEnum.Inativo]: 'Inativo',
      [UserStatusEnum.Ativo]: 'Ativo',
    };

    return userStatusDescription[userStatus] ? userStatusDescription[userStatus] : 'Inválido';
  }



}

import { Pipe, PipeTransform } from '@angular/core';
import { BrazilianStatesService } from '../services/brazilian-states.service';

@Pipe({
  name: 'stateDescription',
})
export class StateDescriptionPipe implements PipeTransform {
  constructor(
    private readonly brazilianStatesService: BrazilianStatesService
  ) {}

  transform(statesId: number): string {
    return this.brazilianStatesService.getStatesDescription(statesId);
  }
}

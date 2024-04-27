import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: '',
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  statusList = [
    {
      value: true,
      description: 'Ativo',
    },
    {
      value: false,
      description: 'Inativo',
    },
  ];

  @Output() onFilterEmitt = new EventEmitter<IFilterOptions>();

  onFilter(){
    this.onFilterEmitt.emit(this.filterOptions);
  };
}

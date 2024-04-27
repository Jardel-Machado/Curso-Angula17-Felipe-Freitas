import { Component, EventEmitter, Output } from '@angular/core';
import { PessoaFormControllerService } from './pessoa-form-controller.service';

@Component({
  selector: 'app-form-builder-externo-com-service',
  templateUrl: './form-builder-externo-com-service.component.html',
  styleUrl: './form-builder-externo-com-service.component.scss',
})
export class FormBuilderExternoComServiceComponent {

  @Output('onFormSubmit') onFormSubmitEmit = new EventEmitter();

  constructor(public readonly pessoaFormControllerService: PessoaFormControllerService) {}

  onFormSubmit() {
    console.log('onFormSubmit =>', this.pessoaFormControllerService.pessoaForm.value);

    this.onFormSubmitEmit.emit(this.pessoaFormControllerService.pessoaForm.value);
  }
}

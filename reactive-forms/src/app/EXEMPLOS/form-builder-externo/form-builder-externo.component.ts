import { Component, EventEmitter, Output } from '@angular/core';
import { PessoaFormController } from './pessoa-form-controller';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder-externo',
  templateUrl: './form-builder-externo.component.html',
  styleUrl: './form-builder-externo.component.scss',
})
export class FormBuilderExternoComponent extends PessoaFormController {

  @Output('onFormSubmit') onFormSubmitEmit = new EventEmitter();

  constructor(private readonly builder2: FormBuilder) {
    super(builder2);
  }

  onFormSubmit() {
    console.log('onFormSubmit =>', this.pessoaForm.value);

    this.onFormSubmitEmit.emit(this.pessoaForm.value);
  };
}

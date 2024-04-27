import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
})
export class FormGroupComponent {
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    endereco: new FormGroup({
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
    }),
  }, {
    updateOn: 'blur',
  });

  constructor() {
    console.log(this.pessoaForm);

    console.log(this.pessoaForm.get('nome'));

    this.pessoaForm.valueChanges.subscribe((value) => console.log("valueChanges => Pessoa Form", value));
  }

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }

  get numero(): FormControl {
    return this.pessoaForm.get('endereco.numero') as FormControl;
  }
  mostrarValue() {
    console.log(this.pessoaForm.value);
  }
  onFormSubmit() {
    console.log('onFormSubmit');
    console.log(this.pessoaForm.value);
  }
  alteracaoTotal() {
    this.pessoaForm.setValue({
      nome: 'Nome Alt',
      email: 'Email Alt',
      endereco: {
        rua: 'Rua Alt',
        numero: '123'
      },
    });
  };
  alteracaoParcial() {
    this.pessoaForm.patchValue({
      endereco: {
        rua: 'Rua Parcial',
        numero: '12'
      }
    });
  };
}

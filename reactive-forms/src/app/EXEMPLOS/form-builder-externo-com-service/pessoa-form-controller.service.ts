import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PessoaFormControllerService {
  pessoaForm!: FormGroup;

  constructor(private readonly builder: FormBuilder) {
    this.pessoaForm = this.builder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      endereco: this.builder.group({
        rua: ['', [Validators.required]],
        numero: ['', [Validators.required]],
      }),
      musicas: this.builder.array([['', [Validators.required]]]),
    });
  }

  get nomeControl(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }

  get musicas(): FormArray {
    return this.pessoaForm.get('musicas') as FormArray;
  }
}

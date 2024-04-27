import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-desafio-touched',
  templateUrl: './desafio-touched.component.html',
  styleUrl: './desafio-touched.component.scss',
})
export class DesafioTouchedComponent implements OnInit {
  pessoaForm!: FormGroup;

  constructor(private readonly builder: FormBuilder) {}
  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.pessoaForm = this.builder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }
  onFormSubmit() {
    if(this.pessoaForm.invalid){
      console.log('INVÁLIDO');

      // this.pessoaForm.markAllAsTouched();

      Object.keys(this.pessoaForm.controls).forEach((controlKey) => {
        const control = this.pessoaForm.get(controlKey);
        if(control?.invalid){
          control.markAsTouched();
          // control.markAsTouched({ onlySelf: true });
        };
      });
    }
    else{
      console.log('Formulário enviado',this.pessoaForm.value);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-comp-filhos',
  templateUrl: './form-comp-filhos.component.html',
  styleUrl: './form-comp-filhos.component.scss',
})
export class FormCompFilhosComponent implements OnInit {
  pessoaForm!: FormGroup;

  constructor(private readonly builder: FormBuilder) {}
  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.pessoaForm = this.builder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      endereco: this.builder.group({
        rua: ['', [Validators.required]],
        numero: ['', [Validators.required]],
      }),
    });
  }
  enviar() {
    console.log(this.pessoaForm.value)
  }
}

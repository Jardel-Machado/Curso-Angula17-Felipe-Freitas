import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss',
})
export class FormBuilderComponent implements OnInit {
  pessoaForm!: FormGroup;

  constructor(private readonly builder: FormBuilder) {}
  ngOnInit(): void {
    this.pessoaForm = this.builder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      endereco: this.builder.group({
        rua: ['', [Validators.required]],
        numero: ['', [Validators.required]],
      }),
      musicas: this.builder.array([['', [Validators.required]]]),
    });
    console.log(this.pessoaForm);
  }

  get musicas(): FormArray {
    return this.pessoaForm.get('musicas') as FormArray;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mark-as-touched',
  templateUrl: './mark-as-touched.component.html',
  styleUrl: './mark-as-touched.component.scss',
})
export class MarkAsTouchedComponent implements OnInit {

  pessoaForm!: FormGroup;

  constructor(private readonly builder: FormBuilder) {}
  ngOnInit(): void {
    this.iniciarFormulario();

    this.pessoaForm.get('nome')?.statusChanges.subscribe((value) => console.log('Status Changes Nome =>', value));

    setTimeout(() => {
      console.log('Touched PessoaForm', this.pessoaForm.touched);
      console.log('Touched NomeControl', this.pessoaForm.get('nome')?.touched);
      console.log('Touched EmailControl', this.pessoaForm.get('email')?.touched);
    }, 4000);
  }

  iniciarFormulario() {
    this.pessoaForm = this.builder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }
  markNomeAsTouched() {
    console.log('markNomeAsTouched');
  //  this.pessoaForm.get('nome')?.markAsTouched({ onlySelf: true });
   this.pessoaForm.get('nome')?.markAsTouched();
   this.pessoaForm.get('nome')?.updateValueAndValidity();
  }
}

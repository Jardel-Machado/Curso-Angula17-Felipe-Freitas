import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  FormControl,
} from '@angular/forms';

const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  console.log('passwordValidator', control);

  const senha = control.get('senha') as FormControl;
  const confirmacaoSenha = control.get('confirmacaoSenha') as FormControl;

  if (senha?.value !== confirmacaoSenha?.value) {
    confirmacaoSenha?.setErrors({  invalidPassword: true });
    return { invalidPassword: true };
  }

  return null;
};

@Component({
  selector: 'app-cross-validator',
  templateUrl: './cross-validator.component.html',
  styleUrl: './cross-validator.component.scss',
})
export class CrossValidatorComponent implements OnInit {
  senhaForm!: FormGroup;

  constructor(private readonly builder: FormBuilder) {}

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm() {
    this.senhaForm = this.builder.group(
      {
        senha: [''],
        confirmacaoSenha: [''],
      },
      {
        validator: passwordValidator,
      }
    );
  }
  mostrarForm() {
    console.log(this.senhaForm);
  }
}

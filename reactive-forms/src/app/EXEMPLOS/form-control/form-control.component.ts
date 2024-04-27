import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { invalidTextValidator } from './invalid-text-validator';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
})
export class FormControlComponent implements OnInit {
  // nome = new FormControl({ value: '', disabled: true }, [Validators.required]);

  // nome = new FormControl('Inicial', [Validators.required]);

  nome = new FormControl('Inicial', [invalidTextValidator('Jardel')]);

  // nome = new FormControl('Inicial', [Validators.required, Validators.minLength(6)]);

  // nome = new FormControl('Inicial', {nonNullable: true, validators: [Validators.required], updateOn:'blur'});

  // nome = new FormControl('Inicial', {
  //   nonNullable: true,
  //   validators: [
  //     Validators.required,
  //     Validators.minLength(6),
  //     Validators.maxLength(7),
  //   ],
  //   updateOn: 'change',
  // });

  ngOnInit(): void {
    console.log(this.nome);

    this.nome.valueChanges.subscribe((result) => {
      console.log('valueChanges', result);
    });

    this.nome.statusChanges.subscribe((result) => {
      console.log('statusChanges', result);
    });
  }

  mostrarStatus() {
    console.log(this.nome);
  }

  alterarValor() {
    this.nome.setValue('Alterado!!!');
  }

  inputAlterado() {
    console.log(this.nome.value);
  }

  desabilitar() {
    this.nome.disable();
  }

  habilitar() {
    this.nome.enable();
  }

  resetar() {
    this.nome.reset('Valor reset');
  }

  setValidators() {
    this.nome.setValidators([]);
    this.nome.setValue('Fe');
    this.nome.setValidators(Validators.minLength(6));
    this.nome.updateValueAndValidity();
  }

  addValidator() {
    this.nome.addValidators(Validators.maxLength(7));
    this.nome.updateValueAndValidity();
  }
}

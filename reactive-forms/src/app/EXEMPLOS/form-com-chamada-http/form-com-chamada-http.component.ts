import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-com-chamada-http',
  templateUrl: './form-com-chamada-http.component.html',
  styleUrl: './form-com-chamada-http.component.scss',
})
export class FormComChamadaHttpComponent implements OnInit {
  pessoaForm!: FormGroup;

  personForm!: FormGroup;

  constructor(
    private readonly userService: UserService,
    private readonly builder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.createPessoaForm();
    this.getUserAndFullfilPessoaForm();
    this.createPersonForm();
    this.getUserAndFullfilPersonForm();
  }

  get telefones(): FormArray {
    return this.pessoaForm.get('telefones') as FormArray;
  }

  get phoneNumbers(): FormArray {
    return this.personForm.get('phoneNumbers') as FormArray;
  }
  private createPessoaForm() {
    this.pessoaForm = this.builder.group({
      nome: [''],
      idade: [null],
      ativo: [false],
      endereco: new FormGroup({
        rua: new FormControl(''),
        numero: new FormControl(null),
      }),
      telefones: new FormArray([]),
    });
  }

  private getUserAndFullfilPessoaForm() {
    this.userService.getUser().subscribe((userResponse: any) => {
      this.fullfilPessoaForm(userResponse);
    });
  }
  private fullfilPessoaForm(userResponse: any) {
    this.pessoaForm.patchValue(userResponse);
    this.telefones.clear();

    userResponse.telefones.forEach((tel: any) => {
      this.telefones.push(
        this.builder.group({
          ddd: [tel.ddd],
          numero: [tel.numero],
        })
      );
    });

    console.log(this.pessoaForm);
  }

  private createPersonForm() {
    this.personForm = this.builder.group({
      name: [''],
      age: [null],
      active: [false],
      address: new FormGroup({
        street: new FormControl(''),
        number: new FormControl(null),
      }),
      phoneNumbers: new FormArray([]),
    });
  }

  private getUserAndFullfilPersonForm() {
    this.userService.getUser().subscribe((userResponse: any) => {
      this.fullfilPersonForm(userResponse);
    });
  }
  private fullfilPersonForm(userResponse: any) {
    const person = {
      name: userResponse.nome,
      age: userResponse.idade,
      active: userResponse.ativo,
      address: {
        street: userResponse.endereco.rua,
        number: userResponse.endereco.numero,
      },
      phoneNumbers: [],
    };

    console.log('person', person);

    this.personForm.patchValue(person);

    this.phoneNumbers.clear();

    userResponse.telefones.forEach((tel: any) => {
      this.phoneNumbers.push(
        this.builder.group({
          area: [tel.ddd],
          number: [tel.numero],
        })
      );
    });

    console.log(this.personForm);
  }
}

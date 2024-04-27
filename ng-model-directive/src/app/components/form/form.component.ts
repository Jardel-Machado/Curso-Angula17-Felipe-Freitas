import { AfterViewInit, Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements AfterViewInit {
  inputText: string = 'Texto inicial';

  textarea: string = 'Descrição Inicial';

  select: string = '1';

  radioButton: string = '1';

  checkbox: boolean = false;

  ngAfterViewInit(): void {}

  onSubmit(form: NgForm) {
    console.log('onSubmit', form.value);

    // form.value['nome'] = 'Texto Alterado';

    // console.log(this.inputText);
  }

  onReset(form: NgForm) {
    console.log('onReset', form.value);


    console.log(this.inputText);
    console.log(this.textarea);
    console.log(this.select);
    console.log(this.radioButton);
    console.log(this.checkbox);
  }
}

import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-com-group',
  templateUrl: './form-array-com-group.component.html',
  styleUrl: './form-array-com-group.component.scss',
})
export class FormArrayComGroupComponent {
  musicasForm = new FormGroup({
    musicas: new FormArray([this.criarGroupMusica()]),
  });

  constructor() {
    console.log(this.musicasForm);
    this.musicas.valueChanges.subscribe((value) =>
      console.log('Value Changes', value)
    );
  }

  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray;
  }
  adicionarMusica() {
    this.musicas.push(this.criarGroupMusica());
  }
  removerMusica(musicaIndex: number) {
    this.musicas.removeAt(musicaIndex);
  }

  private criarGroupMusica() {
    return new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      banda: new FormControl('', [Validators.required]),
    });
  }
}

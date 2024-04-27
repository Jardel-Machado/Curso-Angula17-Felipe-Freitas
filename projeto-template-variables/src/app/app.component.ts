import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private _cdRef: ChangeDetectorRef) {}

  teste = 'Felipe';

  changeDetection() {
    this._cdRef.detectChanges();
  }

  clicou(input: HTMLInputElement){

    console.log(input.value);

    input.value = 'Atualizado';
  };
}

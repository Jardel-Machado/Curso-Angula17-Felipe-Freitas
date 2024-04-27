import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('meuButton') buttonsEL!: QueryList<
    ElementRef<HTMLButtonElement>
  >;

  buttonsList = ['Botão 1', 'Botão 2', 'Botão 3'];

  ngAfterViewInit(): void {
    console.log(this.buttonsEL);

    console.log(this.buttonsEL.toArray());

    const primeiroItem = this.buttonsEL.toArray()[0];

    primeiroItem.nativeElement.style.backgroundColor = 'blue';

    this.buttonsEL.changes.subscribe((result) => {
      console.log(result);
    });
  }
  changeColor(event: Event) {
    console.log(event);

    const btnElement = event.target as HTMLButtonElement;

    btnElement.style.backgroundColor = 'orange';

    btnElement.style.color = 'white';
  }

  resetButtons() {
    this.buttonsEL.forEach((btnEl) => {
      btnEl.nativeElement.style.backgroundColor = '';
      btnEl.nativeElement.style.color = '';
    });
  }

  first() {
    const primeiro = this.buttonsEL.get(0);

    const primeiro1 = this.buttonsEL.find(
      (btnEl) => btnEl.nativeElement.className === 'btn-0'
    );

    console.log(primeiro);

    console.log(primeiro1);
  }

  remove(){
    this.buttonsList.shift();
  };
}

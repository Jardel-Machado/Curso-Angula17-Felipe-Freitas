import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { TesteService } from './services/teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  // title = 'projeto-diretivas';

  // appBgColor = 'green';

  // @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;

  constructor(private readonly elRef: ElementRef, private testeService: TesteService) {}
  ngOnInit(): void {
    // console.log(this.elRef);
    // const outraDivEl = this.elRef.nativeElement.querySelector(
    //   '#minha-outra-div'
    // ) as HTMLDivElement;

    // outraDivEl.textContent = 'Sou a outra div!';
    // outraDivEl.style.backgroundColor = 'blue';
    // outraDivEl.style.color = 'white';

    // outraDivEl.addEventListener('click', () => {
    //   console.log('cliquei na div!!!');
    // });

    // console.log(outraDivEl);
  }
  ngAfterViewInit(): void {
    // this.divEl.nativeElement.style.backgroundColor = 'orange';
    // this.divEl.nativeElement.textContent = 'Sou uma div!';
    // this.divEl.nativeElement.classList.add('minha-classe');
  }

  creatElement(){
    const novadiv = document.createElement('div');
    novadiv.textContent = 'Sou a nova div!';
    novadiv.classList.add('bg-red')

    this.elRef.nativeElement.appendChild(novadiv);
  };

  create() {
    this.testeService.create(this.elRef);
  }
}

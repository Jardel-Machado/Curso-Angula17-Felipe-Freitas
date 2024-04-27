import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TesteService {
  
  // constructor(private readonly elRef: ElementRef) {}

  create(elRef: ElementRef) {
    const novadiv = document.createElement('div');
    novadiv.textContent = 'Sou a nova div!';
    novadiv.classList.add('bg-red');

    elRef.nativeElement.appendChild(novadiv);
  }
}

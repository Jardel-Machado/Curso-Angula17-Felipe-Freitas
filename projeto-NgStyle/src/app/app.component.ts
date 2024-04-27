import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  fontSize: number = 20;
  textColor: 'red' | 'green' = 'red';
  buttonText: 'black' | 'white' = 'black';
  styleString: string = 'font-size: 15px; color: red';

  increaseFontSize() {
    this.fontSize += 10;
    this.styleString = `font-size: ${this.fontSize}px; color: ${this.textColor}`;
  }

  decreaseFontSize() {
    this.fontSize -= 10;
    this.styleString = `font-size: ${this.fontSize}px; color: ${this.textColor}`;
  }

  toggleFontColor() {
    if (this.textColor === 'red') {
      this.textColor = 'green';
      this.buttonText = 'black';
    } else {
      this.textColor = 'red';
      this.buttonText = 'white';
    }

    this.styleString = `font-size: ${this.fontSize}px; color: ${this.textColor}`;	
  }
}

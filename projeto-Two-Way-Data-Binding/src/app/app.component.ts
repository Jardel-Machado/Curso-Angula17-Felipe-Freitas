import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name: string = 'Jardel';

  handleInputChange(event: string){
    console.log(event);
    this.name = event.toUpperCase();
  };
}

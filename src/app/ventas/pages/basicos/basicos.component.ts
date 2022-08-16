import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "dani";
  nombreUpper: string = "DANI";
  nombreCompleto: string = "daniel miranda";

  fecha: Date = new Date();

}

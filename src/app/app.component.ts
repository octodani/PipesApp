import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombre: string = 'daniel Miranda';
  valor: number = 1000;
  obj = {
    nombre: 'Daniel'
  }

  constructor(private primeNGConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }


}

import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Dani';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };
  
  // i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Hernando', 'Fernando', 'Rebeca'];
  clientesMapa = {
    '=0': 'no tenemos ninún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.nombre = 'Rosa';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Dani',
    edad: '31',
    direccion: 'Casabermeja, Málaga'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'aquaman',
      vuela: false
    },
    {
      nombre: 'spiderman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000);
  valorPromesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de la promesa')
    }, 3500);
  })
}

import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nombre = 'Carlitos';
    nombre2 = 'carlos eRnesto artEAga davila';
    arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    PI = Math.PI;
    a = 0.234;
    salario  = 12345.5;
    heroe = {
      nombre: 'Logan',
      clave: 'Wolverine',
      edad: 500,
      direccion: {
          calle: 'primera',
          casa: '19'
      }
    };
    valorPromesa = new Promise( (resolve, reject) => {
      setTimeout( () => resolve('llego la data'), 3500);
    });
    fecha = new Date();
    video = 'NFDtIqnFm3Y';
    nombrepass = 'carlitos';
    activar = true;
}
registerLocaleData(localeEs, 'es');

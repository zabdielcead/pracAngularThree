import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true): string {
    let pass = value;
    if ( !mostrar ) {
      pass = '';
      for ( let i = 0; i < value.length; i++) {
        pass += '*';
      }
    }
    return pass;
  }

}

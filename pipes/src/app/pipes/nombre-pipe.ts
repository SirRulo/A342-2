import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../modelos/users';

@Pipe({
  name: 'nombre',
})
export class NombrePipe implements PipeTransform {
  transform(value: User): string {
    return `${value.name.title} ${value.name.first} ${value.name.last}`;
  }
}

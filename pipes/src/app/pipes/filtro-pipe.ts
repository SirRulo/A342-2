import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../modelos/users';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(arrayUsuarios: User[], busqueda: string): User[] {

    if (!busqueda) {
      return arrayUsuarios;
    }
    return arrayUsuarios.filter(user =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(busqueda.toLowerCase())
    );
  }
}

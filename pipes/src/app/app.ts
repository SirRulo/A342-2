import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './modelos/users';
import { Users } from './servicios/users';
import { AsyncPipe, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { NombrePipe } from './pipes/nombre-pipe';
import { FormsModule } from '@angular/forms';
import { FiltroPipe } from './pipes/filtro-pipe';

@Component({
  imports: [CurrencyPipe, DatePipe, NombrePipe, UpperCasePipe, FormsModule, FiltroPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  users = signal<User[]>([]);
  busqueda = signal('');

  constructor(public usersService: Users) {
  }

  ngOnInit(): void {
      this.usersService.getUsers()
      .subscribe(result => {
          this.users.set(result.results);
      });
  }
}

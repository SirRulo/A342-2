import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  UserResponse } from '../modelos/users';

@Service()
export class Users {

    http = inject(HttpClient);

    getUsers() {
        return this.http.get<UserResponse>('https://randomuser.me/api/?results=10');
    }


}

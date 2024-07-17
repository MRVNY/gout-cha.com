import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User | undefined;
  role: string = 'admin';
  constructor(private DbService: DbService, private router: Router) { 
    // console.log(document.cookie);
    // //load from cookie
    // const cookie = document.cookie.split(';').find(c => c.includes('currentUser'));
    // if (cookie !== undefined) {
    //   //parse json
    //   this.currentUser = JSON.parse(cookie.split('=')[1]);
    //   if(this.currentUser !== undefined) this.role = this.currentUser?.Role ?? 'user';
    // }
  }

  login(username: string, password: string){
    this.DbService.postQuery('user/login', { username: username, password: password }).subscribe({
      next: (data:any) => {
        console.log(data);
        //go to home page
        this.role = data.result.Role;
        this.currentUser = {
          Username: data.result.Username,
          IdUser: data.result.IdUser,
          Email: data.result.Email,
          Role: data.result.Role
        }
        console.log(this.currentUser);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        alert('Invalid username or password');
        console.log(error);
      }
    });

    //add to cookie
    // const tmp = document.cookie;
    // tmp.concat(`currentUser=${JSON.stringify(this.currentUser)};`);
    // document.cookie = tmp;

  }

  register(username: string, password: string, email: string): Observable<any> {
    return this.DbService.postQuery('user/register', { username: username, password: password, email: email, role: 'user' });
  }

  logout() {
    this.currentUser = undefined;
    this.role = 'user';
  }
}

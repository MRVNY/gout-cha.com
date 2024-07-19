import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '@models/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User | undefined;
  role: string = 'user';
  constructor(private DbService: DbService, private router: Router, private CookieService: CookieService) { 
    // //load from cookie
    // this.CookieService.deleteAll();
    console.log(this.CookieService.getAll());
    const tmp = this.CookieService.get('currentUser');
    if (tmp !== undefined && tmp !== "undefined" && tmp !== ''){
      this.currentUser = JSON.parse(tmp);
    }
  }

  login(username: string, password: string){
    this.DbService.postQuery('user/login', { username: username, password: password }).subscribe({
      next: (data:any) => {
        //go to home page
        this.role = data.result.Role;
        this.currentUser = {
          Username: data.result.Username,
          IdUser: data.result.IdUser,
          Email: data.result.Email,
          Role: data.result.Role
        }
        this.router.navigate(['/home']);

        this.CookieService.set('currentUser', JSON.stringify(this.currentUser));
        console.log(this.CookieService.getAll());
      },
      error: (error) => {
        alert('Invalid username or password');
        console.log(error);
      }
    });
  }

  register(username: string, password: string, email: string): Observable<any> {
    return this.DbService.postQuery('user/register', { username: username, password: password, email: email, role: 'user' });
  }

  logout() {
    this.currentUser = undefined;
    this.CookieService.delete('currentUser');
    this.router.navigate(['/home']);
    this.role = 'user';
  }
}

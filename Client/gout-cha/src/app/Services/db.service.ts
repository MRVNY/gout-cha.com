import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  myurl: string = window.location.href;
  url: string = 'https://gout-cha.azurewebsites.net/';

  constructor(private http: HttpClient) {
    //ping localhost
    this.http.get('http://localhost:5281/ping').subscribe({
      next: (data) => {
        this.url = 'http://localhost:5281/';
      },
      error: (error) => {
        this.url = 'https://gout-cha.azurewebsites.net/';
      }
    });
    // this.url = 'http://localhost:5281/';
  }

  getQuery(query: string) {
    const result = this.http.get(this.url + query);
    result.pipe(
      catchError((error) => {
        console.error('There was an error!', error);
        return of([]);
      })
    );
    return result;
  }

  postQuery(query: string, data: any) {
    const result = this.http.post(this.url + query, 
      data,
      {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    );
    result.pipe(
      catchError((error) => {
        console.error('There was an error!', error);
        return of([]);
      })
    );
    return result;
  }

  putQuery(query: string, data: any) {
    const result =  this.http.put(
      this.url + query, 
      data, 
      {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    );

    result.pipe(
      catchError((error) => {
        console.error('There was an error!', error);
        return of([]);
      })
    );
    return result;
  }

  deleteQuery(query: string) {
    const result =  this.http.delete(this.url + query);

    result.pipe(
      catchError((error) => {
        console.error('There was an error!', error);
        return of([]);
      })
    );
    return result;
  }
}

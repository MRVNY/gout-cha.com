import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  myurl: string = window.location.href;
  url: string = '';

  constructor(private http: HttpClient) {
    // this.url = 'https://gout-cha.azurewebsites.net/';
    this.url = 'http://localhost:5281/';
    //   if(this.myurl.includes('localhost')) this.url = 'http://localhost:5281/';
    //   else this.url = 'https://gout-cha.azurewebsites.net/';
  }

  getQuery(query: string) {
    return this.http.get(this.url + query);
  }

  postQuery(query: string, data: any) {
    return this.http.post(this.url + query, 
      data,
      {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    );
  }

  putQuery(query: string, data: any) {
    return this.http.put(
      this.url + query, 
      data, 
      {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    );
  }

  deleteQuery(query: string) {
    return this.http.delete(this.url + query);
  }
}

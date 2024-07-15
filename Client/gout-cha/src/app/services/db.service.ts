import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  //get my url 
  myurl : string = window.location.href;
  url : string = '';

  constructor(private http: HttpClient) {
      this.url = 'https://gout-cha.azurewebsites.net/';
  //   url = 'http://localhost:5281/';
  //   if(this.myurl.includes('localhost')) this.url = 'http://localhost:5281/';
  //   else this.url = 'https://gout-cha.azurewebsites.net/';
  }


  getAllTea(): Observable<any> {
    return this.http.get(this.url + 'product/getAllTea');
  }

  callAPI(route:string, query: string) {
    this.http.get(this.url + 'product/getProduct?id='+query).subscribe((data) => {
    // console.log(data);
    alert(JSON.stringify(data));
    });
  }

  addPhoto(idProduct: string, base64String: string) {
    this.http.post(`${this.url}admin/addPhoto`, { idProduct, image: base64String }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).subscribe((data) => {
      console.log(data);
    });
  }
}

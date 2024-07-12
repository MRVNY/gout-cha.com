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

  // url = 'https://gout-cha.azurewebsites.net/';
  // url = 'http://localhost:5281/';

  constructor(private http: HttpClient) {
    if(this.myurl.includes('localhost')) this.url = 'http://localhost:5281/';
    else this.url = 'https://gout-cha.azurewebsites.net/';
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
    console.log(idProduct);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { image: base64String };

    // this.http.post(this.url + 'admin/addPhoto?idProduct='+idProduct, body, { headers }).subscribe((data) => {
    //   console.log(data);
    // });

    this.http.post(`${this.url}admin/addPhoto`, { idProduct, image: base64String }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).subscribe((data) => {
      console.log(data);
    });
    // console.log(base64String);
    // this.http.post(this.url + 'admin/addPhoto?idProduct='+idProduct+'&image='+base64String, null).subscribe((data) => {
    //   console.log(data);
    // });
  }
}

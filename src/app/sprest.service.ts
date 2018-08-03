import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'accept': 'application/json;odata=verbose' })
  headers: new HttpHeaders({accept: 'application/json;odata=verbose'})
};

@Injectable({
  providedIn: 'root'
})

export class SprestService {

  constructor(private http: HttpClient) { }

  GetText(){

    // var textToShow = this.http.get('https://interoko.sharepoint.com/sites/IT/_api/Web/GetUserById(15)/title').subscribe(res => console.log(res.toString ));

    var textToShow = this.http.get('https://interoko.sharepoint.com/sites/IT/_api/Web/GetUserById(15)/title').subscribe(console.log);

    return textToShow;

  }

}

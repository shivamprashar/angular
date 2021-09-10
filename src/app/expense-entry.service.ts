import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseEntryService {

  // private url: string = "http://jsonplaceholder.typicode.com/todos";
  private url : string = "http://localhost:3000/";

  constructor(private http:HttpClient) { }
  getData(): Observable<Array<User>>
  { 
    return this.http.get<User[]>(this.url);
  }
}

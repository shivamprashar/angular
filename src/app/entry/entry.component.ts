import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  Language= [
    { "id": 1, "name": "Python"},
    { "id": 2, "name": "C#"},
    { "id": 3, "name": "Javascript"},
    { "id": 4, "name": "SQL"}
  ]
  constructor(private router:Router){ }
  onSelect(i:any)
  {
    this.router.navigate(["/home","home.id"]);
  }
ngOnInit(): void {  }

}

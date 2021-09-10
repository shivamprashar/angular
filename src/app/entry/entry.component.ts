import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  
  constructor(private router:Router){ }
  ngOnInit(): void {  }

  @Input() public parentData: any;
  @Output() childEvent = new EventEmitter<string>();

  presentDate = new Date();
  Language= [
    { "id": 1, "name": "Python"},
    { "id": 2, "name": "C#"},
    { "id": 3, "name": "Javascript"},
    { "id": 4, "name": "SQL"}
  ]
  onSelect(i:any)
  {
    this.router.navigate(["/home","home.id"]);
  }

  sendData(value : any)
  {
    this.childEvent.emit(value.value);
    value.value="";
  }

}

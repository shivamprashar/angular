import { Component, OnInit } from '@angular/core';
import { ExpenseEntryService } from '../expense-entry.service';
import { User } from '../models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name = "Name-from-Parent";
  public Users: Array<User> | undefined;
  constructor(private _expense_entry : ExpenseEntryService) { 
  }

  ngOnInit(): void {
    this._expense_entry.getData().subscribe(data=>{
      debugger;
      this.Users = data;
    })
  }
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}

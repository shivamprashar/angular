import { Component } from '@angular/core';
import { ExpenseEntryService } from './expense-entry.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shivam';
  public name = "MY NAME IS KHAN";  
  public users: any | undefined;

  constructor() {
    
  }
}


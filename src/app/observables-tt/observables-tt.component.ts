import { Component, OnInit } from '@angular/core';
import { observable, Observable, range } from 'rxjs';
@Component({
  selector: 'app-observables-tt',
  templateUrl: './observables-tt.component.html',
  styleUrls: ['./observables-tt.component.css']
})
export class ObservablesTTComponent implements OnInit {

  obs = new Observable((observer)=>{
    console.log("Observable Starts Here ")
    observer.next("1")
    observer.next("2")
    // observer.complete()
    observer.next("5")
    observer.next("6")
  })
   numbers$ =range(1,10);
  callObs()
  {
    this.numbers$.subscribe(
      val=>{console.log(val)},
      err=>{console.log(err)},
      ()=>{console.log("Completed")}
    )
  }
  ngOnInit(): void {

  }

}

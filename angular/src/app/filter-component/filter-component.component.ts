import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { interval,of,timer,from } from 'rxjs';



@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponentComponent implements OnInit {

  constructor() { }

  // ngOnInit(): void {
  //   of(1,2,3,4,5,6,7,8,9).pipe(
  //     filter(val=> { return val % 2 ==0 })
  //   ).subscribe(val=>console.log(val))
  // }

  // ngOnInit(): void {
  //   of(1,2,3,4,5,6,7,8,9).pipe(filter(val=>{return val !==undefined && val !== null})).subscribe(val=>console.log(val))
  // }

  values=[{name:'john',age:30},{name:'alex',age:28}]

  ngOnInit(): void {
    from(this.values).pipe(
      filter(val=> {return val.age > 30})
    ).subscribe(val=>console.log(val))
  }

}

import { Component, OnInit } from '@angular/core';
import {of,tap,map,from} from 'rxjs'
@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  constructor() { }

  // ngOnInit(): void {
  //   of(1,2,3,4).pipe(
  //     tap(value=>  console.log('at tap',value))
  //   ).subscribe(val=> console.log('at subscribe',val))
  // }

// ngOnInit(): void {
//     of(1,2,3,4,5).pipe(
//       tap(val=>{
//         console.log('before',val);

//       }),
//       map(val =>{ return val + 5}),
//       tap(val=> console.log('after', val))
//     ).subscribe(val=> console.log(val))
// }

ngOnInit(): void {
  of(1,2,3,4,5).pipe(
    tap(val=> {console.log('before',val)}),
    map(
      val=> { if(val > 3){
        throw Error
      }
    return val + 5
    }),
    tap(
      val=> {console.log('After',val)},
      err=>{
        console.log("tap Error");
        console.log(err)
      },
      ()=>{
        console.log("Tap Complete")
      }
    )
  ).subscribe(val=>console.log(val))
}

}

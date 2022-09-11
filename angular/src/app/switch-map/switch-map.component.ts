import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { switchMap,of,map,fromEvent,observable,catchError,from ,interval, Observable} from 'rxjs';


@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  @ViewChild('btn',{static:true}) btn:any;
  click$:Observable<any>

  ngAfterViewInit(){
    this.click$=fromEvent(this.btn.nativeElement,'click')
    this.switchExample()
  }
  
switchExample(){
  this.click$.pipe(
    switchMap(()=>{
      return interval(500)
    })
  ).subscribe(val=> console.log(val))
}

  constructor() { }

  ngOnInit(): void {
    // let srcObservalbe= of(1,2,3,4)
    // let innerObservable= of('a','b','c','d')

  //   srcObservalbe.pipe(
  //     switchMap(val=> {
  //       console.log('Source value ' + val)
  //       console.log('starting new Observable')
  //       return innerObservable
  //     })
  //   ).subscribe(ret=>console.log('Read ' + ret))

  // let obs = of(1,2,3,4)

  // obs.pipe(
  //   map(val=>{
  //       return val*2
  //   })
  // ).subscribe(ret=>{
  //   console.log('read from map: '+ ret)
  // })

  // obs.pipe(
  //   switchMap(val=>{
  //     return of(val*2)
  //   })
  // ).subscribe(ret=>{
  // console.log('ret from switch map',ret)
  // })
  }



}

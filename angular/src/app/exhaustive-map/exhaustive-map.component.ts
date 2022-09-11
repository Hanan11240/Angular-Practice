import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Observable,exhaustMap,interval,fromEvent,of, observable } from 'rxjs';
@Component({
  selector: 'app-exhaustive-map',
  templateUrl: './exhaustive-map.component.html',
  styleUrls: ['./exhaustive-map.component.scss']
})
export class ExhaustiveMapComponent implements OnInit {
count:number=0

@ViewChild('btn') btn:any
clicks$:Observable<any>
ngAfterViewInit(){
  this.clicks$= fromEvent(this.btn.nativeElement,'click')
  this.exhaustMapExample()
}

delayedObs(count:number){
  return new Observable((observer)=>{
    setTimeout(()=>{observer.next(count + 'A')},1000)
    setTimeout(()=>{observer.next(count + 'B')},2000)
    setTimeout(()=>{observer.next(count + 'C')},3000)
    setTimeout(()=>{observer.next(count + 'D')},4000)
    setTimeout(()=>{observer.next(count + 'E'),observer.complete()},5000)
  })
}


exhaustMapExample(){
let obs = this.clicks$.pipe(
  exhaustMap(()=>{
    this.count= this.count+1;
    return this.delayedObs(this.count)
  })
).subscribe(data=>console.log(data))
}
  constructor() { }





  ngOnInit(): void {
  }

}

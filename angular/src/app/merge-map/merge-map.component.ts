import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { of,mergeMap,fromEvent,interval,Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {
count:number=0
// @ViewChild('btn',{static:true}) btn:any
// click$:Observable<any>

// ngAfterViewInit(){
//   this.click$= fromEvent(this.btn.nativeElement,'click');
//   this.mergeMapExample()
// }


// delayedObs(count:number){
//   return new Observable((observer)=>{
//     setTimeout(()=> {observer.next(count+ 'A')},1000)
//     setTimeout(()=> {observer.next(count+ 'B')},2000)
//     setTimeout(()=> {observer.next(count+ 'C')},3000)
//     setTimeout(()=> {observer.next(count+ 'D')},4000)
//     setTimeout(()=> {observer.next(count+ 'E');observer.complete()},5000)
//   })
// }

// mergeMapExample(){
//   let obs = this.click$.pipe(
//     mergeMap(()=>{
//       this.count = this.count+1
//       return this.delayedObs(this.count)
//     })
//   ).subscribe(val=>console.log(val))
// }

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // let sercObservable=of(1,2,3,4)
    // let innerObservable= of('A','B','C','D')

    // sercObservable.pipe(
    //   mergeMap(val=>{
    //     console.log('Source Val',val)
    //     console.log('Starting new Observable')
    //     return innerObservable
    //   })
    // ).subscribe(rer=>{
    //   console.log('Ret',rer)
    // })



    of("hound","mastiff","retriever").pipe(mergeMap(breed=>{
      const url = 'https://dog.ceo/api/breed/' + breed + '/list'
      return this.http.get<any>(url)
    })).subscribe(data=> console.log(data))
  }

}

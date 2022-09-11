import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {of,from,fromEvent,interval,Observable} from 'rxjs'
import { concatMap,forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {
// count:number=0
//   @ViewChild('btn',{static:true}) btn:any;
//   clicks$:Observable<any>

  // ngAfterViewInit(){
  //   this.clicks$= fromEvent(this.btn.nativeElement,'click')
  //   this.concatMapExample3();
  // }

  // delayedObs(count:number) {
  //   return new Observable((observer) => {
  //     setTimeout(() => { observer.next(count+" A") }, 1000);
  //     setTimeout(() => { observer.next(count+" B") }, 2000);
  //     setTimeout(() => { observer.next(count+" C") }, 3000);
  //     setTimeout(() => { observer.next(count+" D") }, 4000);
  //     setTimeout(() => { observer.next(count+" E"); observer.complete() }, 5000);
  //   })
  // }

  concatMapExample3() {
 
    // let obs=
 
    // this.clicks$
    //   .pipe(
    //     concatMap(() => {
    //       this.count=this.count+1;
    //       return this.delayedObs(this.count)
    //     })
    //   )
    //   .subscribe(val => console.log(val));

  }
 
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
    // of("hound","mastiff","retriever").pipe(
    //   concatMap(breed=>{
    //     const url='https://dog.ceo/api/breed/' + breed + '/list';
    //     return this.http.get<any>(url)
    //   })
    // ).subscribe(data=>console.log(data))

    of("hound","mastiff","retriever").pipe(
      concatMap(breed=>{
        const url1 = 'https://dog.ceo/api/breed/' + breed + '/list';
        const url2 = 'https://dog.ceo/api/breed/' + breed + '/images/random';

        let obs1= this.http.get<any>(url1)
        let obs2= this.http.get<any>(url2)
 
        return forkJoin(obs1,obs2)
      })
    ).subscribe(data=>{console.log(data)})
  }

}

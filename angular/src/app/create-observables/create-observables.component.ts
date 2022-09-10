import { Component, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';
import {of,from} from 'rxjs'
@Component({
  selector: 'app-create-observables',
  templateUrl: './create-observables.component.html',
  styleUrls: ['./create-observables.component.scss']
})
export class CreateObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
      // const obsUsingCreate = Observable.create((observer:any)=>{
      //   observer.next(1)
      //   observer.next(2)
      //   observer.next(3)
      //   observer.complete()
      // })
      // obsUsingCreate.subscribe((val:any)=>console.log(val),
      //   (error:any)=>console.log('error'),
      //   ()=>console.log('complete')
      // )


      // of operator
      // const array1 = [1,2,3,4,5]
      // const array2 = ['a','b']
      // const obsOf1= of(array1,array2,100,"abc");
      // obsOf1.subscribe((val:any)=>console.log(val),
      //   (error:any)=>console.log(error),
      //   ()=>console.log('complete')
      //   )


      // from operator
      
      // const array3=[1,2,3,4]
      
      // const obsFrom1=from(array3)
      // const obsFrom1=from("Hi world")
      
      // let myMap=new Map()
      // myMap.set(0,'Hi')
      // myMap.set(1,'world')
      // const obsFrom1 = from(myMap)
      
      // obsFrom1.subscribe((val:any)=>console.log(val[1]),
      //   (error:any)=>console.log(error),
      //   ()=>console.log('complete')
      //   )



      // convert promise to observable using from operator

      const promiseSource = from(new Promise(resolve=>resolve('Hi world')))

      const obsFrom5= from(promiseSource)
      obsFrom5.subscribe((val:any)=>console.log(val)),
      (error:any)=>console.log(error),
      ()=>console.log('complete')
  }
       
}

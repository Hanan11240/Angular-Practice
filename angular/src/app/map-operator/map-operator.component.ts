import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { from, map,filter,tap, Observable, fromEvent } from 'rxjs';





@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit {
  srcName$=from(['Hanan','Adnan','Munaqib'])
  srcObject=from([
    {fName:'Sachin',iName:'Tendulkar'},
    {fName:'Rahul',iName:'Dravid'},
    {fName:'Saurav',iName:'Guanguly'},
   
  ])
  constructor() { }
srcArray=from([1,2,3,4])
  ngOnInit(): void {
//    const  srcArray=[1,2,3,4]
//  from(srcArray).pipe(
//   map((val,i)=>
//   {
//     console.log('index',i)
//     return val*2})
//  ).subscribe(val=>{console.log(val)})


// this.toUpperCase()
// this.mapToSingleProperty()
this.multipeMaps()
  }








mapToSingleProperty(){
  this.srcObject.pipe(
    map(data=>{return data.fName + '' + data.iName})
  ).subscribe(data=>console.log(data))
}


toUpperCase(){
  this.srcName$.pipe(
    map(data=> {
      return data.toUpperCase();
    })
  ).subscribe(data=>console.log(data))
} 


multipeMaps(){
  this.srcArray.pipe(map(val=>{return val + 10}),map(val=> {return val *2})).subscribe(val=>console.log(val))
}


}

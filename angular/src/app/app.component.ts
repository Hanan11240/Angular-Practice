import { Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    obs = new Observable((observer)=>{
      console.log('observer',observer)
     setTimeout(()=>{observer.next(1)},1000)
     setTimeout(()=>{observer.next(2)},2000)
     setTimeout(()=>{observer.next(3)},3000)
     setTimeout(()=>{observer.error("error emitted")},3500)
     setTimeout(()=>{observer.next(4)},4000)
     setTimeout(()=>{observer.next(5)},5000)
    
    })



// ngOnInit(){
//   this.obs.subscribe(
//     val=> {console.log(val)},
//     error=>{console.log(error)},
//     ()=> {console.log('complete')}
//   )
// }

  
}

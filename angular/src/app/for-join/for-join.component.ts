import { Component, OnInit } from '@angular/core';
import { forkJoin, mergeMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-for-join',
  templateUrl: './for-join.component.html',
  styleUrls: ['./for-join.component.scss']
})
export class ForJoinComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.mergeHttpRequestWithFork()
  }

  mergeHttpRequestWithFork(){
    of("hound","mastiff","retriever").pipe(
      mergeMap(breed=>{
        const url= 'https://dog.ceo/api/breed/' + breed + '/list';
        const url2 = 'https://dog.ceo/api/breed/' + breed + '/images/random';

        let obs1= this.http.get<any>(url)
        let obs2= this.http.get<any>(url2)

        return forkJoin(obs1,obs2)
      })
    ).subscribe(data=>console.log(data))
  }

}

import {Component, inject} from '@angular/core';
import {ChuckService} from '../services/chuck.service'
import {Observable} from "rxjs";
import {chuck} from "../interface/chuck";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  jokeService: ChuckService = inject(ChuckService)
  joke: chuck = {} as chuck;



  constructor() {
    this.getOneJoke()
  }

  getOneJoke(){
    this.jokeService.getJoke().subscribe({
      next:(jokeFromFetch:any)=>{
        this.joke = {
          value: jokeFromFetch.value,
          url: jokeFromFetch.url
        }
        console.log(jokeFromFetch)
      }
    })
  }

}

import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {chuck} from "../interface/chuck";



@Injectable({
  providedIn: 'root'
})
export class ChuckService {
  url : string = "https://api.chucknorris.io/jokes/random"

  constructor(private http : HttpClient) { }

  getJoke()
  {
    return this.http.get<chuck>(this.url)
  }


}


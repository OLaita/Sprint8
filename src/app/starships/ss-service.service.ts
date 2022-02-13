import { Injectable } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SsServiceService {

  swapi: string;
  sShips: any;
  sShips2: any;
  starship: any;
  peli: any;
  p: any = /\//g;


  constructor(private router:Router, private http:HttpClient) {
    this.swapi = 'https://swapi.py4e.com/api';

  }

  getStarship(){

    fetch(this.swapi+"/starships")
      .then(response => response.json())
      .then(data => this.mostrarSS(data));
    
  }

  mostrarSS(data:any){
    this.sShips = data;
  }

  getSS(){
    return this.http.get(this.swapi+"/starships");
  }

  getInfo(){
    return this.http.get(this.swapi+this.router.url);
  }

  nextPag(data:any){
    // console.log(data.next);
    return this.http.get(data.next);
  }
}

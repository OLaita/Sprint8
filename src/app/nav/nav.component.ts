import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  seleccionado;

  constructor(public acomp: AppComponent) {
    this.seleccionado = true;
   }

  ngOnInit(): void {

  }

  cnav(){
    this.seleccionado = !this.seleccionado;
  }

}

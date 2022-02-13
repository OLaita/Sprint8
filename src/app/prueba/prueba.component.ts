import { Component, OnInit } from '@angular/core';
import { SsServiceService } from '../starships/ss-service.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  finishPage = 4;
  actualPage: number;

  sShips: any;
  sShips2: any;

  constructor(public sservice:SsServiceService) {
    this.actualPage = 1;

    this.sservice.getSS().subscribe((data)=>{
      this.sShips = data;
      this.sShips2 = this.sShips.results;
    });
  }

  ngOnInit(): void {
  }

  addStarShips() {
    this.sservice.nextPag(this.sShips).subscribe((data)=>{
      this.sShips = data;
      this.sShips2 = this.sShips2.concat(this.sShips.results);
    });
    
  }

  onScroll() {
    if (this.actualPage < this.finishPage) {
      this.addStarShips();
      this.actualPage ++;
    }
  }
  

}

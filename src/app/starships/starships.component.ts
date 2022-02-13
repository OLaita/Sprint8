import { Component, OnInit } from '@angular/core';
import { isJSDocThisTag } from 'typescript';
import { SsServiceService } from './ss-service.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent implements OnInit {

  sShips: any;
  sShips2: any;

  finishPage = 4;
  actualPage: number;

  constructor(public SsServiceService: SsServiceService) {

    this.SsServiceService.getSS().subscribe((data)=>{
      this.sShips = data;
      this.sShips2 = this.sShips.results;
    });

    this.actualPage = 1;
    
  }

  ngOnInit(): void {
    // this.SsServiceService.getStarship();
  }

  addStarShips() {
    this.SsServiceService.nextPag(this.sShips).subscribe((data)=>{
      this.sShips = data;
      this.sShips2 = this.sShips2.concat(this.sShips.results);
      // console.log(this.sShips2);
    });
    
  }

  onScroll() {
    if (this.actualPage < this.finishPage) {
      this.addStarShips();
      this.actualPage ++;
    }
  }

}

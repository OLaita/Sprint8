import { Component, OnInit } from '@angular/core';
import { SsServiceService } from '../ss-service.service';

@Component({
  selector: 'app-view-ss',
  templateUrl: './view-ss.component.html',
  styleUrls: ['./view-ss.component.css']
})
export class ViewSSComponent implements OnInit {

  nave: any;
  text: any;


  constructor(public SsServiceService: SsServiceService) {
    this.SsServiceService.getInfo().subscribe((data)=>{
      this.nave = data;
      this.getFilm(data);
    });
    // this.SsServiceService.getFilm().subscribe((data)=>{
    //   this.text = data;
    // });
  }

  ngOnInit(): void {
  }

  getFilm(data: any){
    // console.log(data);
    fetch(data.films[0])
      .then(response => response.json())
      .then(data => this.mostrarPeli(data));
    
  }

  mostrarPeli(data:any){
    this.text = data;
  }

}

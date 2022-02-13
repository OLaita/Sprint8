import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './starships/starships.component';
import { ViewSSComponent } from './starships/view-ss/view-ss.component';
import { PruebaComponent } from './prueba/prueba.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starships', component: StarshipsComponent
  // children:[
  //   {
  //     path:':url', 
  //     component: ViewSSComponent
  //   }
  // ]
  },
  { path: 'starships/:url', component: ViewSSComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

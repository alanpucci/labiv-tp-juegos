import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangmanComponent } from 'src/app/components/games/hangman/hangman.component';
import { HigherlowerComponent } from 'src/app/components/games/higherlower/higherlower.component';
import { PreguntadosComponent } from 'src/app/components/games/preguntados/preguntados.component';
import { SnakeComponent } from 'src/app/components/games/snake/snake.component';

const routes: Routes = [
  {path:'', component:HomeComponent, children:[
    {path:'', pathMatch:'full', redirectTo:'/home/ahorcado'},
    {path:'ahorcado', component:HangmanComponent},
    {path:'mayormenor', component:HigherlowerComponent},
    {path:'preguntados', component:PreguntadosComponent},
    {path:'vibora', component:SnakeComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

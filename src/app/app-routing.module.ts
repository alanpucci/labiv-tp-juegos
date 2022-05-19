import { HangmanComponent } from './components/game/hangman/hangman.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { LoginModule } from './page/login/login.module';
import { ChatComponent } from './components/chat/chat.component';
import { HigherlowerComponent } from './components/game/higherlower/higherlower.component';
import { PreguntadosComponent } from './components/game/preguntados/preguntados.component';
import { SnakeComponent } from './components/game/snake/snake.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/login'},
  {path:'login',  component:LoginModule},
  {path:'about', component:AboutComponent},
  {path:'chat', component:ChatComponent},
  {path:'home', component:HomeComponent, canActivate:[AuthGuard], children:[
    {path:'', pathMatch:'full', redirectTo:'/home/ahorcado'},
    {path:'ahorcado', component:HangmanComponent},
    {path:'mayormenor', component:HigherlowerComponent},
    {path:'preguntados', component:PreguntadosComponent},
    {path:'vibora', component:SnakeComponent},
  ]},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

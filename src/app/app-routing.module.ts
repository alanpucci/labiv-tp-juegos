import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { AboutComponent } from './page/about/about.component';
import { ChatComponent } from './components/chat/chat.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/login'},
  {path:'login', loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule)},
  {path:'about', canActivate:[AuthGuard], component:AboutComponent},
  {path:'home', canActivate:[AuthGuard], loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule)},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

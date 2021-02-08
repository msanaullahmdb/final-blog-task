import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NewblogComponent } from './newblog/newblog.component';
import { EditblogComponent } from './editblog/editblog.component'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'edit',
    component: EditblogComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'newblog',
    component: NewblogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

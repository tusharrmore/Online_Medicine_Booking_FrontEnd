import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MedicinepageComponent } from './medicinepage/medicinepage.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
    {path:'', component:UserLoginComponent},
   {path:'home', component:HomeComponent},
   {path:'search/:searchItem',component:HomeComponent},
   {path:'medicine/:id',component:MedicinepageComponent},
   {path:'cart-page',component:CartPageComponent},
    {path:"Registration", component:RegisterUserComponent},
    {path:'Contect', component:ContactComponent},
    {path:'home/Contect', component:ContactComponent},
    {path:'header/Contect', component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

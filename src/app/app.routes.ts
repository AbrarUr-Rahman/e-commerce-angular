import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsComponent } from './Pages/products/products.component';
import { AboutComponent } from './Pages/about/about.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { CartComponent } from './Pages/cart/cart.component';

export const routes: Routes = [
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'about',component:AboutComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'cart',component:CartComponent},
];

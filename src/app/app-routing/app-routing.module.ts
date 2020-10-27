import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AddProductComponent } from '../add-product/add-product.component';

const appRouting:Routes = [
  { path:"", component:ProductComponent },
  { path:"login", component:LoginComponent },
  { path:"register", component:RegisterComponent },
  { path:"add-product", component:AddProductComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouting)
  ],
  declarations: [],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
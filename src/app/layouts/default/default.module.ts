import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from '../../layouts/default/default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from 'src/app/modules/products/products.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class DefaultModule { }

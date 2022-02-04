import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from '../../layouts/default/default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OrdersComponent } from 'src/app/modules/orders/orders.component';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { ProductEditComponent } from 'src/app/modules/products/product-edit/product-edit.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProductsComponent,
    OrdersComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MatSidenavModule,
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }

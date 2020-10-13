import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductsComponent } from './products/products.component';


//  Declare all the components in this module
@NgModule({
  declarations: [AccountComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PagesRoutingModule
  ],
})
export class PagesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//  Declare all the components in this module
@NgModule({
  declarations: [
    AccountComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PagesRoutingModule,
  ],
})
export class PagesModule {}

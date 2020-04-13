import { CartProduct } from './../src/app/modals/cartProduct';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from '../src/app/pages/products/products.component';
import { ProductService } from 'src/app/services/product.service';
import { HeaderComponent } from 'src/app/pages/header/header.component';
import { FooterComponent } from 'src/app/pages/footer/footer.component';
import { Product } from 'src/app/modals/product';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent, HeaderComponent, FooterComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      providers: [ProductService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have add function', () => {
    expect(component.add).toBeTruthy();
  });

  it('should have changeQuantitiy function', () => {
    expect(component.changeQuantity).toBeTruthy();
  });

  it('should have routeAnalyser function', () => {
    expect(component.routeAnalyser).toBeTruthy();
  });

  it('add method should add to seesionStorage item "cart" ', () => {
    const product: Product = {
      id: '11',
      image: '../../../assets/images/Green apple.jpeg',
      category: 'fruit',
      name: 'Green Apple',
      description: '4pcs',
      price: 266,
    };
    component.add(product);
    const cart: CartProduct[] = JSON.parse(sessionStorage.getItem('cart'));
    expect(cart[cart.length - 1].productName).toEqual(product.name);
  });

  it('should have routeAnalyser function', () => {
    expect(component.routeAnalyser).toBeTruthy();
  });
});

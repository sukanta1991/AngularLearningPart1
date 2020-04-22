import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from '../src/app/pages/products/products.component';
import { ProductService } from 'src/app/services/product.service';
import { HeaderComponent } from 'src/app/pages/header/header.component';
import { FooterComponent } from 'src/app/pages/footer/footer.component';
import { Product } from 'src/app/modals/product';
import { CartProduct } from './../src/app/modals/cartProduct';


describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent, HeaderComponent, FooterComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      providers: [ProductService],
    }).compileComponents();
  }));

  beforeEach( async( () => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async( () => {
    expect(component).toBeTruthy();
  }));

  it('should have addProduct method', async( () => {
    expect(component.addProduct).toBeTruthy();
  }));

  it('should have changeQuantity method', async( () => {
    expect(component.changeQuantity).toBeTruthy();
  }));

  it('should have routeAnalyser method', async( () => {
    expect(component.routeAnalyser).toBeTruthy();
  }));

  it('addProduct method should add to sessionStorage item "cart" ', async( () => {
    const product: Product = {
      id: '11',
      image: '../../../assets/images/Green apple.jpeg',
      category: 'fruit',
      name: 'Green Apple',
      description: '4pcs',
      price: 266,
    };
    component.addProduct(product);
    const cart: CartProduct[] = JSON.parse(sessionStorage.getItem('cart'));
    expect(cart[cart.length - 1].productName).toEqual(product.name);
  }));

});

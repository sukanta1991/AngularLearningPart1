import { CartProduct } from './../src/app/modals/cartProduct';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './../src/app/pages/header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from '../src/app/pages/cart/cart.component';
import { FooterComponent } from 'src/app/pages/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  const cart: CartProduct[] = [
    {
      productId: '18',
      productName: 'Tur Dal',
      quantity: 7,
      price: 490
    },
    {
      productId: '27',
      productName: 'Salt',
      quantity: 6,
      price: 176
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent, HeaderComponent, FooterComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have calculate method', () => {
    expect(component.calculate).toBeTruthy();
  });

  it('should have getCart method', () => {
    expect(component.getCart).toBeTruthy();
  });

  it('should have remove method', () => {
    expect(component.remove).toBeTruthy();
  });

  it('should have update method', () => {
    expect(component.update).toBeTruthy();
  });

  it('should have checkOut method', () => {
    expect(component.checkOut).toBeTruthy();
  });

  it('calculate method calculates total and subTotal', () => {
    component.ngOnInit();
    component.calculate();
    expect(component.total).toEqual(4486);
    expect(component.subTotal[0]).toEqual(3430);
    expect(component.subTotal[1]).toEqual(1056);
  });

  it('remove method to remove first item in cart', () => {
    component.ngOnInit();
    component.remove(0);
    expect(component.total).toEqual(1056);
    expect(component.subTotal[0]).toEqual(1056);
  });

  it('remove method to remove an item in cart', () => {
    component.ngOnInit();
    component.remove(1);
    expect(component.total).toEqual(3430);
    expect(component.subTotal[0]).toEqual(3430);
  });


});

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from '../src/app/pages/cart/cart.component';
import { HeaderComponent } from './../src/app/pages/header/header.component';
import { FooterComponent } from 'src/app/pages/footer/footer.component';
import { CartProduct } from './../src/app/modals/cartProduct';


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

  beforeEach( async(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have calculateTotal function', () => {
    expect(component.calculateTotal).toBeTruthy();
  });

  it('should have getCart function', () => {
    expect(component.getCart).toBeTruthy();
  });

  it('should have removeProduct function', () => {
    expect(component.removeProduct).toBeTruthy();
  });

  it('should have updateQuantity function', () => {
    expect(component.updateQuantity).toBeTruthy();
  });

  it('should have checkOut function', () => {
    expect(component.checkOut).toBeTruthy();
  });

  it('calculateTotal function calculates total and subTotal', () => {
    component.ngOnInit();
    component.calculateTotal();
    expect(component.total).toEqual(4486);
    expect(component.subTotal[0]).toEqual(3430);
    expect(component.subTotal[1]).toEqual(1056);
  });

  it('removeProduct function to remove first item in cart', () => {
    component.ngOnInit();
    component.removeProduct(0);
    expect(component.total).toEqual(1056);
    expect(component.subTotal[0]).toEqual(1056);
  });

  it('removeProduct function to remove an item in cart', () => {
    component.ngOnInit();
    component.removeProduct(1);
    expect(component.total).toEqual(3430);
    expect(component.subTotal[0]).toEqual(3430);
  });


});

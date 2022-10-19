import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';
import { Medicines } from '../shared/models/medicine';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!: Cart;
  cartArr:Medicines[]=[];

  constructor(private cartService: CartService) { 
    this.setCart();
    
  }

  ngOnInit(): void {
    
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.medicine.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.medicine.id, quantity);
    this.setCart();
  }
  
  onLoadPaymentData(event: any) {
       console.log("load payment data", event.detail);
      }



}

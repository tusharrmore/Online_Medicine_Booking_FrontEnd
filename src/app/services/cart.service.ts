import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';
import { Medicines } from '../shared/models/medicine';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getTotalPrice(): any {
    throw new Error('Method not implemented.');
  }

  private cart:Cart = new Cart();
  addToCart(medicine:Medicines) :void{
    let cartItem = this.cart.items.find(item => item.medicine.id === medicine.id)
    if(cartItem){
      this.changeQuantity(medicine.id , cartItem.quantity +1)
      return;
    }
    this.cart.items.push(new CartItem(medicine));
  }

  removeFromCart(medicineId:number):void{
    this.cart.items = this.cart.items.filter(item =>item.medicine.id !=medicineId)
  }
  changeQuantity(quantity:number, medicineId:number){
    let cartItem = this.cart.items.find(item => item.medicine.id === medicineId);
    if(!cartItem) return;
    cartItem.quantity += quantity;
  }
  getCart():Cart{
    return this.cart;
      ;
  }

}

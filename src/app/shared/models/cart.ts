import { CartItem } from "./cartItem";

export class Cart{
    subscribe(arg0: (res: any) => void) {
      throw new Error('Method not implemented.');
    }
    items:CartItem[] = [];

    get totalPrice():number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;  
        }

    
}
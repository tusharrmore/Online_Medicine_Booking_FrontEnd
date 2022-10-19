import { Medicines } from "./medicine";

export class CartItem{
static medicine: any;
constructor(medicine:Medicines){
    this.medicine =medicine;

}

medicine:Medicines;
quantity:number = 1;
get price(): number{
    return this.medicine.price * this.quantity;
}
}
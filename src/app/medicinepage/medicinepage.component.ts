import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { MedicineService } from '../services/medicine/medicine.service';
import { Cart } from '../shared/models/cart';
import { Medicines } from '../shared/models/medicine';

@Component({
  selector: 'app-medicinepage',
  templateUrl: './medicinepage.component.html',
  styleUrls: ['./medicinepage.component.css']
})
export class MedicinepageComponent implements OnInit {
  medicine!: Medicines;
  // medicineArr: Medicines[] = [];
  cart!:Cart;

  constructor(private activatedRoute: ActivatedRoute,
    private medicineService: MedicineService, private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.medicine = medicineService.getMedicineById(params['id'])
    })
  }

  ngOnInit(): void {
  }


  addToCart(val: any) {

    alert("inside add to card =" + val.name);

    // this.medicineArr.push(val);
    
    // sessionStorage.setItem("cart",this.medicineArr.toString());
    this.cartService.addToCart(val);
    this.router.navigateByUrl('/cart-page')
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../services/medicine/medicine.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public myitem : any;
  constructor(private api : MedicineService, private rt:Router)  { }

  ngOnInit(): void {

    if (sessionStorage.getItem('name')!=null) {
      this.myitem=sessionStorage.getItem('name');
    }
    else {
      this.rt.navigate(['']);
    }
    
   
  }

}

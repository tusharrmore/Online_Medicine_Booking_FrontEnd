import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../services/medicine/medicine.service';
import { Medicines } from '../shared/models/medicine';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  medicines:Medicines[]=[];
  constructor(private md:MedicineService , private route:ActivatedRoute) { }

  ngOnInit(): void { 
   
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.medicines=this.md.getAll().filter(medicine =>medicine.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else
      this.medicines=this.md.getAll();
    })
  }
}

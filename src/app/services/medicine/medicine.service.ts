import { Injectable } from '@angular/core';
import { Medicines } from 'src/app/shared/models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor() { }
  getMedicineById(id:number):Medicines{
    return this.getAll().find(medicine => medicine.id == id)!;

  }

  getAll():Medicines[]{
    return[
      {
       id:1,
       price:10,
       name:'Allegra 120 mg',
       imageUrl:'/assets/allegra-120-mg.jpg',
      },
      {
        id:2,
        price:5,
        name:'Ascoril',
        imageUrl:'/assets/Ascoril.jpg',

      },
      {
        id:3,
        price:5,
        name:'Atarax 25mg Tablet',
        imageUrl:'/assets/Atarax25mgTablet.jpg',
      },
      {
        id:4,
        price:2,
        name:'Augmentin',
        imageUrl:'/assets/Augmentin.jpg',
      },
      {
        id:5,
        price:6,
        name:'Protinex Mama',
        imageUrl:'/assets/Protinex Mama.jpg',
      },
    
    {
      id:6,
      price:7,
      name:'Azithral',
      imageUrl:'/assets/azithral.jpg',
    },
  {
    id:7,
    price:4,
    name:'Azee 500 Tablet',
    imageUrl:'/assets/Azee500Tablet.jpg',
  },
  {
    id:8,
    price:7,
    name:'Moov',
    imageUrl:'/assets/Moov.jpg',
  },
  {
    id:9,
    price:5,
    name:'Vicks',
    imageUrl:'/assets/Vicks.jpg',
  }
      
    ];
  
  }
}

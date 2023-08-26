import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray} from '@angular/forms'
import { Product } from '../../models/product';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {

  products: Product[] = [
    { id:1 , price: 2400, name: 'Mac Book Pr0'},
    { id:2 , price: 50, name: 'USB Adaptor'},
    { id:3 , price: 400, name: 'Ipod'},
    { id:4 , price: 600, name: 'Watch'},
    { id:5 , price: 800, name: 'Iphone '},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock : new FormArray([])
  })
  onSubmit(){

    console.log(this.form.value);
  }
  
}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-stock-prodect',
  templateUrl: './stock-prodect.component.html',
  styleUrls: ['./stock-prodect.component.css']
})
export class StockProdectComponent implements OnInit {

  @Input()
  parent!: FormGroup;

  @Input()
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    debugger
  }

}

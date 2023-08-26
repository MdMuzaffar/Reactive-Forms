import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StockInventoryComponent} from './../../container/stock-inventory/stock-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockBranchComponent } from '../../components/stock-branch/stock-branch/stock-branch.component';
import { StockProdectComponent } from '../../components/stock-prodect/stock-prodect.component';
import { StockSelectorComponent } from '../../components/stock-selector/stock-selector/stock-selector.component';



@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockProdectComponent,
    StockSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    StockInventoryComponent
  ]
})
export class StockInventoryModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockInventoryComponent } from './stock-inventory/container/stock-inventory/stock-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockInventoryModule } from './stock-inventory/stock-inventory-module/stcok-inventory/stcok-inventory.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockInventoryModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

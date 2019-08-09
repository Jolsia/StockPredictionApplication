import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockService } from './stock.service';
import { StockComponent } from './stock/stock.component';



@NgModule({
  declarations: [
    AppComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }







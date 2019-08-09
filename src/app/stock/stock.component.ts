import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { StockClass } from '../stock'; 



 @Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private CurrentSearchValue : StockClass;
  private pastSearchValue : StockClass[] = []
  
   constructor(private searchservice: StockService) { }

   ngOnInit() {
  }
  getClick(SearchElement: string): void {
    this.CurrentSearchValue = this.searchservice.getClick(SearchElement);
    //storing Search Results
    this.CurrentSearchValue.SearchTime = (new Date()).toTimeString();
    this.pastSearchValue.push(this.CurrentSearchValue);
  }
 }

 
import { Injectable } from '@angular/core';
import  { StockClass } from './Stock';
import { SEARCH } from './stock-data';


@Injectable()
export class StockService {
	private search: StockClass[] = SEARCH;
  
  constructor() { }

  
getClick(SearchElement: string): StockClass{
	for(var i = 0; i < this.search.length; i++)
	{	
		if(this.search[i].SearchElement == SearchElement)
		{
			return this.search[i];
		}
	}
}
}



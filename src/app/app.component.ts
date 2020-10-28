import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Air-demo';
  list$ =  this.dataService.list$;
  cartItems$ =  this.dataService.cartItems$;

  constructor( private dataService: DataService) {
    this.dataService.getData();
  }

  add(item: string) {
    this.dataService.addTocart(item);
  }
  remove(index) {
    this.dataService.removeFromcart(index);
  }
}

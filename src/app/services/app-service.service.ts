import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  items = 0;
  inCartItem: any;
  totalProducts: any;
  notification: any = false;
  numberOfItems: any;

  constructor() {}

  increaseItem() {
    return (this.items = this.items + 1);
  }

  decreaseItem() {
    if (this.items > 0) {
      return (this.items = this.items - 1);
    }
  }

  addToCart() {
    if (this.items > 0) {
      this.numberOfItems = this.items;
      this.inCartItem = true;
      this.totalProducts = this.numberOfItems * 125.0;
      this.notification = true;
    }
  }

  deleteProduct() {
    this.numberOfItems = 0;
    this.inCartItem = false;
    this.notification = false;
  }
}

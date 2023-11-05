import { Injectable } from '@angular/core';
import { Producto } from '../product';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  myCart: Producto[] = []
  total = 0;
  addProduct(newProduct: Producto){
    this.myCart.push(newProduct);
  }
  getTotal(){
    this.total = this.myCart.reduce((e,item)=> e + item.price, 0);
    return this.total
  }

  constructor() { }
}

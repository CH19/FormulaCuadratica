import { Injectable } from '@angular/core';
import { Producto } from '../product';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  myCart: Producto[] = [];
  private myShoppingCart = new BehaviorSubject<Producto[]>([]);

  myShoppingCart$ = this.myShoppingCart.asObservable();
  total = 0;
  addProduct(newProduct: Producto){
    this.myCart.push(newProduct);
    this.myShoppingCart.next(this.myCart);
  }
  getTotal(){
    this.total = this.myCart.reduce((e,item)=> e + item.price, 0);
    return this.total
  }

}

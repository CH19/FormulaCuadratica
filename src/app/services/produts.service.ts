import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Producto } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProdutsService {

  constructor(
    // importando nuestro primer servicio
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Producto[]>('https://fakestoreapi.com/products');
  }
}

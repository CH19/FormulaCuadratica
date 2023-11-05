import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() P: Producto = { id: 0,
  title: '',
  price: 0,
  image: '',
}
@Output() addedProduct = new EventEmitter<Producto>()

onAddCart(){
  this.addedProduct.emit(this.P);
}
today = new Date('December 17, 2020 03:24:00')
}

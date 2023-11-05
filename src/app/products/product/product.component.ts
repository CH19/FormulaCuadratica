import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() P: Producto = { id: 0,
  name: '',
  precio: 0,
  image: '',
}

}

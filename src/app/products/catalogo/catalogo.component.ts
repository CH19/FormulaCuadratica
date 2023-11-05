import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/product';
import { ProdutsService } from 'src/app/services/produts.service';
import {StoreService} from '../../services/store.service'
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  // myProducts: Producto[] = [];
  total = 0;
  public productos: Producto[] = [
    {
      id: 1,
      title: 'Automobil de juguete',
      price: 100,
      image: 'https://static3.depositphotos.com/1000865/118/i/600/depositphotos_1183767-stock-photo-toy-car.jpg'
    },
    {
      id: 2,
      title: 'Muñeca de trapo',
      price: 180,
      image: 'https://kinuma.com/8869-home_default/muneca-de-trapo-mali.jpg'
    },
    {
      id: 3,
      title: 'Pelota de futbol',
      price: 120,
      image: 'https://media.istockphoto.com/photos/soccer-ball-isolated-3d-rendering-picture-id1257575611?k=20&m=1257575611&s=612x612&w=0&h=g530fFJspT42xFGY7HycLvpBKLXpJ2XAkKCRyY-SK80='
    },
    {
      id: 4,
      title: 'Castillo',
      price: 220,
      image: 'https://i.imgur.com/44nzvkQ.jpg'
    }
  ];
  printSendProduct(newProduct: Producto){
    // agarrando datos del emit del producto
    console.log(newProduct);
    // this.myProducts.push(newProduct);
    // this.total = this.myProducts.reduce((e,item) => e + item.precio, 0)
    this.storeServices.addProduct(newProduct);
    this.total = this.storeServices.getTotal();
    }
    ngOnInit(): void {
      this.productService.getAllProducts().subscribe(
        data => data.forEach(item => this.productos.push(item))
        )
    }
  constructor(
    private storeServices: StoreService,
    private productService: ProdutsService
  ){
  }
}

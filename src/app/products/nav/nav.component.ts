import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/product';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  counter = 0
  constructor(private storeSerice: StoreService ){

  }
  ngOnInit(): void {
      this.storeSerice.myShoppingCart$.subscribe(
        products => {
          this.counter = products.length
        }
      )
  }
  @Input() user: User = {
    name: '',
    email: 'user@gmail.com',
    password :''
  }
  showMobileMenu = false;
  toogleMenu()
  {
    this.showMobileMenu = !this.showMobileMenu;
  }

}

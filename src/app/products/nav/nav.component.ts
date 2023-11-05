import { Component, Input } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { User } from 'src/app/product';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
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

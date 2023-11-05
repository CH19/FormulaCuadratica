import { Component, OnInit, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent implements OnInit, OnDestroy, OnChanges{
  counter = 0;
  time: any = 0;
  toogle = false;
  toogleFn(){
    this.toogle = !this.toogle;
  }
  constructor(){
    this.counter = 1;
  }
  ngOnChanges(): void {
    console.log('ha habido un cambio');
  }
  ngOnInit(): void {
    console.log('componente iniciado');
    this.time = setInterval(()=>{
      this.counter++;
      console.log('corriendoS');
      if(this.counter == 10){
        clearInterval(this.time);
      }
    }, 1000)

  }
  ngOnDestroy(): void {
      clearInterval(this.time);
  }
}

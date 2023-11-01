import { Component, NgModule } from '@angular/core';
import {NgModel, FormsModule} from '@angular/forms'

@Component({
  selector: 'app-formu',
  templateUrl: './formu.component.html',
  styleUrls: ['./formu.component.scss']
})
export class FormuComponent {
  labels = Array(3).fill('X');
  numbers: number[] = Array(3).fill(null);
  operacion = false;
  result: any = 0;


  union(label: string, position: number){
    return label + (position +1);
  }
  button(){
    this.operacion = true;
    this.result = this.calcCuadrado();
  }
  calcCuadrado(){
    function discrim(a:number, b:number, c:number){
      return ((b*b )- (4*a*c));
    }
    const disc = discrim(this.numbers[0], this.numbers[1], this.numbers[2]);
    const soluciones: number[] = Array(2).fill(0);
    console.log(disc);
    if(this.operacion && disc > 0){
      soluciones[0] = Number((-this.numbers[1]) + Math.sqrt((this.numbers[1]** 2) - (4 * this.numbers[0] * this.numbers[2])))/(2*this.numbers[0]);
      soluciones[1] = Number((-this.numbers[1]) - Math.sqrt((this.numbers[1]** 2) - (4 * this.numbers[0] * this.numbers[2])))/(2*this.numbers[0]);
      console.log(this.numbers);
      return `la solucion x1 es ${soluciones[0]} y la x2 es ${soluciones[1]}`;
    }else{
      return 'Sin solucion real. La raiz es negativa';
    }
  }
}

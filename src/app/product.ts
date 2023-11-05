import { EmailValidator } from "@angular/forms";

// interfaces/producto.interface.ts

type email = `${string}@${string | 'gmail'}.${'com' | 'net'}`
export interface Producto {
    id: number;
    name: string;
    precio: number;
    image: string;
}
export interface User{
  name?: string;
  email: email,
  password?: string;
}


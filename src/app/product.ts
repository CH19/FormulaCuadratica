
// interfaces/producto.interface.ts

type email = `${string}@${string | 'gmail'}.${'com' | 'net'}`
export interface Producto {
    id: number;
    title: string;
    price: number;
    image: string;
    description?: string;
    category?: string;
}
export interface User{
  name?: string;
  email: email,
  password?: string;
}


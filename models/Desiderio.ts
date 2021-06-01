import { ListaDesideri } from "./ListaDesideri";
import { User } from "./User";

export interface Desiderio {
    id: number;
    name: string;
    description?: string;
    place?: string;
    price: number;
    categoryId: number;
    categoryDescription?: string;
    slug: string;
    booked_by?: User;
    listaDesiderio: ListaDesideri;
}
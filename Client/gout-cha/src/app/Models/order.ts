import { ShoppingItem } from "./shopping-item";
export interface Order {
    IdOrder: number;
    IdUser: number;
    TotalPrice: number;
    Status: string;
    Date: Date;
    Products: ShoppingItem[];
}

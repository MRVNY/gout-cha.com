import { ShoppingItem } from "./shopping-item";

export interface Order {
    id: string;
    userId: string;
    items: ShoppingItem[];
    total: number;
    status: string;
    date: string;
}

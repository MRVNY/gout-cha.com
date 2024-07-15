import { Img } from "./img";

export interface Chapter {
    title ?: string;
    content?: string;
    images ?: Img[];
    style ?: string; //left, right, center
}
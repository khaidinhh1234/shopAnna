export interface IProduct {
  id?: number | string;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  images: [];
}
export interface IProducts {
  id: any;
  products: IProduct[];
}

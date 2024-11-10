export interface DynamicPayload {
  [key: string]: any;
}

export interface Item {
  id: number;
  name: string;
  price: number;
  priceDiscount: number;
  iconUrl: string;
}

export interface ResponsePayload {
  createdAt: Date;
  name: string;
  image: string;
  publisher: string;
  description: string;
  id: string;
  category: string;
  items: Item[];
}

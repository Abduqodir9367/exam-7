export type ProductType = {
    id: string;
    name: string;
    category: string;
    price: string;
    stars: string;
    imgUrl: string;
    numOfProducts: number;
  };
  
  export type ProductsType = {
    products: ProductType[];
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    message: string;
  };
  
  export type ErrorType = {
    message: string;
  };
  
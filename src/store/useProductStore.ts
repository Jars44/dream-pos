import { create } from "zustand";
import { persist } from "zustand/middleware";
import { productsData } from "@/lib/mock-data";

export interface Product {
  sku: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  unit: string;
  qty: number;
  createdBy: string;
}

interface ProductStore {
  products: Product[];
  addProduct: (product: Product) => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: productsData,
      addProduct: (product) =>
        set((state) => ({
          products: [product, ...state.products],
        })),
    }),
    {
      name: "dreamspos-product-storage",
    }
  )
);

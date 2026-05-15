"use client";

import { useState } from "react";
import { useProductStore } from "@/store/useProductStore";
import type { Product } from "@/store/useProductStore";

export function useProducts(): Product[] {
  const [hydrated] = useState(() => typeof document !== "undefined");
  const products = useProductStore((state) => state.products);

  return hydrated ? products : products;
}

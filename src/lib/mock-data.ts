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

export const productsData: Product[] = [
  {
    sku: "PT001",
    name: "Lenovo IdeaPad 3",
    category: "Computers",
    brand: "Lenovo",
    price: "$600",
    unit: "Pc",
    qty: 100,
    createdBy: "James Kirwin",
  },
  {
    sku: "PT002",
    name: "Beats Pro",
    category: "Electronics",
    brand: "Beats",
    price: "$160",
    unit: "Pc",
    qty: 140,
    createdBy: "Francis Chang",
  },
  {
    sku: "PT003",
    name: "Nike Jordan",
    category: "Shoe",
    brand: "Nike",
    price: "$110",
    unit: "Pc",
    qty: 300,
    createdBy: "Antonio Engle",
  },
  {
    sku: "PT004",
    name: "Apple Series 5 Watch",
    category: "Electronics",
    brand: "Apple",
    price: "$120",
    unit: "Pc",
    qty: 450,
    createdBy: "Leo Kelly",
  },
  {
    sku: "PT005",
    name: "Amazon Echo Dot",
    category: "Electronics",
    brand: "Amazon",
    price: "$80",
    unit: "Pc",
    qty: 320,
    createdBy: "Annette Walker",
  },
  {
    sku: "PT006",
    name: "Sanford Chair Sofa",
    category: "Furniture",
    brand: "Modern Wave",
    price: "$320",
    unit: "Pc",
    qty: 650,
    createdBy: "John Weaver",
  },
  {
    sku: "PT007",
    name: "Red Premium Satchel",
    category: "Bags",
    brand: "Dior",
    price: "$60",
    unit: "Pc",
    qty: 700,
    createdBy: "Gary Hennessy",
  },
  {
    sku: "PT008",
    name: "Iphone 14 Pro",
    category: "Phone",
    brand: "Apple",
    price: "$540",
    unit: "Pc",
    qty: 630,
    createdBy: "Eleanor Panek",
  },
  {
    sku: "PT009",
    name: "Gaming Chair",
    category: "Furniture",
    brand: "Arlime",
    price: "$200",
    unit: "Pc",
    qty: 410,
    createdBy: "William Levy",
  },
  {
    sku: "PT010",
    name: "Borealis Backpack",
    category: "Bags",
    brand: "The North Face",
    price: "$45",
    unit: "Pc",
    qty: 550,
    createdBy: "Charlotte Klotz",
  },
];
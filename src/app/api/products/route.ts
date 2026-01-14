import { NextResponse } from "next/server";

// Seeded products (in-memory)
// src/app/api/data.ts (or wherever you want to keep your seeded data)
export const products = [
  { id: 1, name: "Jacket", price: 99, img: "/product2.png", category: "Men" },
  { id: 2, name: "Shoes", price: 59, img: "/product2.png", category: "Men" },
  { id: 3, name: "T-Shirt", price: 19, img: "/product.png", category: "Kids" },
  { id: 4, name: "Shoes", price: 59, img: "/product.png", category: "Women" },
  { id: 5, name: "Cap", price: 15, img: "/product2.png", category: "Others" },
  { id: 6, name: "Sneakers", price: 75, img: "/product2.png", category: "Men" },
  { id: 7, name: "Dress", price: 120, img: "/product.png", category: "Women" },
  { id: 8, name: "Hat", price: 25, img: "/product.png", category: "Kids" },
  { id: 9, name: "Gloves", price: 30, img: "/product2.png", category: "Others" },
  { id: 10, name: "Shirt", price: 45, img: "/product.png", category: "Men" },
];


export async function GET() {
  return NextResponse.json(products);
}

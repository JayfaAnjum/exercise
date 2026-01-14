// src/app/api/products/[id]/route.ts
import { NextResponse } from "next/server";
import { products } from "../route"; // Import the array from your main products route

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    return NextResponse.json({ message: "Invalid product ID" }, { status: 400 });
  }

  const product: Product | undefined = products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

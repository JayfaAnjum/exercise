// src/app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { products } from "../route"; // Import the main products array

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // params is now a Promise
) {
  const { params } = context;
  const resolvedParams = await params; // resolve the promise
  const id = parseInt(resolvedParams.id, 10);

  if (isNaN(id)) {
    return NextResponse.json({ message: "Invalid product ID" }, { status: 400 });
  }

  const product: Product | undefined = products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

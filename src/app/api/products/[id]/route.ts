import { NextResponse } from "next/server";

// Seeded products (same as above)
const products = [
  { id: 1, name: "Jacket", price: 99 },
  { id: 2, name: "Shoes", price: 59 },
  { id: 3, name: "T-Shirt", price: 19 },
];

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find(p => p.id === Number(params.id));

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

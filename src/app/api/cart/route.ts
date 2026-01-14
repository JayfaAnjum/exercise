import { NextResponse } from "next/server";

let cart: any[] = []; // In-memory cart

// GET – return cart
export async function GET() {
  return NextResponse.json(cart);
}

// POST – add to cart
export async function POST(req: Request) {
  const body = await req.json();

  const existing = cart.find(item => item.id === body.id);
  if (existing) {
    existing.qty += body.qty || 1;
  } else {
    cart.push({ ...body, qty: body.qty || 1 });
  }

  return NextResponse.json({ message: "Added to cart", cart }, { status: 201 });
}

// DELETE – clear cart
export async function DELETE() {
  cart = [];
  return NextResponse.json({ message: "Cart cleared" });
}

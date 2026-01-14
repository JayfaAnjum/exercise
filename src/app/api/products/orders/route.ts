import { NextResponse } from "next/server";

let orders: any[] = []; // In-memory orders

// GET – all orders
export async function GET() {
  return NextResponse.json(orders);
}

// POST – create order
export async function POST(req: Request) {
  const body = await req.json();

  const newOrder = {
    id: orders.length + 1,
    items: body.items,
    total: body.total,
    status: "Pending",
    createdAt: new Date().toISOString(),
  };

  orders.push(newOrder);

  return NextResponse.json({ message: "Order placed", order: newOrder }, { status: 201 });
}

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("devstack_db");
  const tools = await db.collection("tools").find({}).toArray();
  return NextResponse.json(tools);
}

export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("devstack_db");
  
  const result = await db.collection("tools").insertOne({
    name: body.name,
    category: body.category,
    description: body.description,
    rating: body.rating || 5.0,
    img: body.img || "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400",
    createdAt: new Date()
  });

  return NextResponse.json(result, { status: 201 });
}
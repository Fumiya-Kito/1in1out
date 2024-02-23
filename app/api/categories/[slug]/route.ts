import { NextResponse, NextRequest } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: number } }
) {
  try {
    // categoryIdを取得
    const categoryId = +params.slug;

    const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
    const db = client.db();
    const response = await db
      .collection("categories")
      .findOne({ _id: categoryId as any });

    client.close();
    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}
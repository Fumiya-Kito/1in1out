import { NextResponse, NextRequest } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // monoIDを取得
    const monoId = params.slug;

    const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
    const db = client.db();
    const response = await db
      .collection("monos")
      .findOne({ _id: new ObjectId(monoId) })
    
    client.close();
    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // categoryIdを取得
    const monoId = params.slug;

    // リクエストボディの取得
    const body = await request.json();

    const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
    const db = client.db();
    const response = await db
      .collection("monos")
      .updateOne({ _id: new ObjectId(monoId) }, { $set: { ...body } });

    client.close();
    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // monoIdを取得
    const monoId = params.slug;

    const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
    const db = client.db();
    const response = await db
      .collection("monos")
      .deleteOne({ _id: new ObjectId(monoId) });

    client.close();
    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}

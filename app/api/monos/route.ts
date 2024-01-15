import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

async function POST(request: Request) {
  try {
    // // リクエストボディの取得
    const body = await request.json();

    console.log(process.env.MONGO_URI);

    /** 接続はlibに移行, 毎回MonogoDbClientをインスタンス化させないため */
    const client = await MongoClient.connect(
      `${process.env.MONGO_URI}`
    );
    const db = client.db();
    const response = await db.collection("monos").insertOne(body);
    client.close();

    return NextResponse.json(response);
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}

async function GET(request: Request) {
  try {
    // // リクエストボディの取得
    const body = await request.json();
    const { category_id } = body;

    /** 接続はlibに移行, 毎回MonogoDbClientをインスタンス化させないため */
    const client = await MongoClient.connect(
      `${process.env.MONGO_URI}`
    );
    const db = client.db();
    const response = await db.collection("monos").find().toArray();
    client.close();
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}

export { GET, POST };

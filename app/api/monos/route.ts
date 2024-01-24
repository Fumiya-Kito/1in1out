import { NextResponse, NextRequest } from "next/server";
import { MongoClient } from "mongodb";

async function POST(request: Request) {
  try {
    // // リクエストボディの取得
    const body = await request.json();

    /** 接続はlibに移行, 毎回MonogoDbClientをインスタンス化させないため */
    const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
    const db = client.db();
    const response = await db.collection("monos").insertOne(body);
    client.close();

    return NextResponse.json(response);
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}

async function GET(request: NextRequest) {
  try {
    // クエリからカテゴリーIDを取得
    const searchParams = request.nextUrl.searchParams;
    const categoryId = searchParams.get('category_id');

    /** 接続はlibに移行, 毎回MonogoDbClientをインスタンス化させないため */
    const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
    const db = client.db();

    const findCondition = categoryId ? { "category_id": +categoryId } : {};

    const response = await db.collection("monos").find(findCondition).toArray();
    client.close();
    return NextResponse.json(response, {status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}

export { POST, GET };

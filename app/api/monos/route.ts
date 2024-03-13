import { NextResponse, NextRequest } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { Mono } from "@/app/type";

async function PATCH(request: Request) {
  try {
    // // リクエストボディの取得
    const body: Mono[] = await request.json();

    const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
    const db = client.db();

    const bulkOperations = body.map((mono) => {
      const {_id, ...setterObj} = mono;

      return {
        updateOne: {
          filter: { _id: new ObjectId(_id) },
          update: {
            $set: setterObj, // 各更新内容をそのまま設定
          },
        },
      };
    });

    const response = await db.collection("monos").bulkWrite(bulkOperations);
    client.close();

    return NextResponse.json(response);
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}

async function POST(request: Request) {
  try {
    // // リクエストボディの取得
    const body = await request.json();

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
    const categoryId = searchParams.get("category_id");

    /** 接続はlibに移行, 毎回MonogoDbClientをインスタンス化させないため */
    const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
    const db = client.db();

    const findCondition = categoryId ? { category_id: +categoryId } : {};

    const response = await db.collection("monos").find(findCondition).toArray();
    client.close();
    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}

export { POST, PATCH, GET };

import { NextResponse, NextRequest } from "next/server";
import { Db, MongoClient, ObjectId, ModifyResult, Document } from "mongodb";

const getNextCategoryID = async function(db: Db) {
  const result = await db.collection("counters").findOneAndUpdate(
      { table_id: "CATEGORY_ID_SEC" },
      { $inc: { sequence_value: 1 } },
      { returnDocument: "after" }
  );
  return result?.sequence_value;
};

async function POST(request: Request) {
  
  try {
    // // リクエストボディの取得
    const body = await request.json();

    /** 接続はlibに移行, 毎回MonogoDbClientをインスタンス化させないため */
    const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
    const db = client.db();
    // 採番取得
    const categoryId = await getNextCategoryID(db);
    if (!categoryId) throw new Error("Failed to get category ID");
    // 新規ドキュメントオブジェクトを作成
    const insData = { _id: categoryId, ...body}

    const result = await db.collection("categories").insertOne(insData);

    client.close();

    // console.log('from POST', result);
    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}

async function GET(request: NextRequest) {
  try {
    // クエリからカテゴリーIDを取得
    // const searchParams = request.nextUrl.searchParams;
    // const categoryId = searchParams.get('category_id')!;

    /** 接続はlibに移行, 毎回MonogoDbClientをインスタンス化させないため */
    const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
    const db = client.db();
    const response = await db.collection("monos").find().toArray();
    client.close();
    return NextResponse.json(response, {status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}

export { POST, GET };

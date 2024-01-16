
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  console.log('from slug');

  try {
    // // リクエストボディの取得
    const categoryId = params.slug;
    console.log(params.slug);

    /** 接続はlibに移行, 毎回MonogoDbClientをインスタンス化させないため */
    const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
    const db = client.db();
    // const response = await db.collection("monos").find({ "category_id": categoryId }).toArray();
    const documents = await db.collection("monos").find().toArray();
    client.close();
    return NextResponse.json({ monos: documents});
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}

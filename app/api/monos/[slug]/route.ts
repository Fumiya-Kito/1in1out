import { NextResponse, NextRequest } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // monoIDを取得
    const monoId = params.slug;

    /** 接続はlibに移行, 毎回MonogoDbClientをインスタンス化させないため */
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

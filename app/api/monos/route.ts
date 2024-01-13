import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

async function POST(request: Request) {
  console.log("monos/route.ts POST");
  try {
    // // リクエストボディの取得
    const body = await request.json();
    // const { category_id, icon, name } = body;

    // // パスワードのハッシュ化
    // const hashedPassword = await bcrypt.hash(password, 12);

    // // ユーザーの作成
    // const response = await prisma.user.create({
    //   data: {
    //     email,
    //     name,
    //     hashedPassword,
    //   },
    // })

    /** 接続はlibに移行, 毎回MonogoDbClientをインスタンス化させないため */
    const client = await MongoClient.connect(
      "mongodb+srv://kit-23:s9KCfzNT7LgHEfxX@cluster0.7ehjbxn.mongodb.net/1in1out?retryWrites=true&w=majority"
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
      "mongodb+srv://kit-23:rKLsqn2jn2IAOekt@cluster0.7ehjbxn.mongodb.net/1in1out?retryWrites=true&w=majority"
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

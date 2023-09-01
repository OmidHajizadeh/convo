import { db } from "@/lib/database/db";
import { fetchRedis } from "@/utils/fetchRedis";
import { fetchServerSession } from "@/utils/serverInteractions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await fetchServerSession();

  // is user authenticated
  if (!session) {
    return NextResponse.json(
      { message: "شما دسترسی به این عملیات را ندارید", error: true },
      { status: 401 }
    );
  }

  const body: {
    name: string;
  } = await req.json();
  const { name } = body;

  // is the provided status text valid
  if (name.trim().length > 25 || name.trim().length === 0) {
    return NextResponse.json(
      { message: "محتوای فراهم شده در فرم معتبر نیست", error: true },
      { status: 400 }
    );
  }

  const userId = session.user.id;

  const dataBaseUser = (await db.get(`user:${userId}`)) as User;
  const newUser = {
    ...dataBaseUser,
    name,
  };

  await db.set(`user:${userId}`, JSON.stringify(newUser));

  return NextResponse.json(
    {
      message: "پروفایل شما با موفقیت ویرایش شد",
      error: false,
    },
    {
      status: 200,
    }
  );
}

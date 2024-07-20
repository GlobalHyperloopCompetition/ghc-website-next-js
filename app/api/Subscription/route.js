// route to news letter subscription

import { db } from "../../../firebase/config";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const email = body;

  try {
    // check weather user exist or not

    const user_db = collection(db, "newsLettersubscription");
    const check_user = query(user_db, where("email", "==", email));
    const get_user = await getDocs(check_user);

    if (get_user.exists()) {
      return NextResponse.json(
        { sucess: "false", message: "user already exists" },
        { status: 400 }
      );
    }
    const save_data = await addDoc(user_db, {
      email: email,
    });
  } catch (error) {
    console.error(error);
  }
}

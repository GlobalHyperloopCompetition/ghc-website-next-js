import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getToken } from "next-auth/jwt";

export async function GET(
  req: NextRequest,
  { params }: { params: { email: string } }
) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { email } = params;

  if (!email || typeof email !== "string") {
    return NextResponse.json(
      { success: false, message: "Invalid email" },
      { status: 400 }
    );
  }

  if (email !== token.email) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const user_db = collection(db, "users");
    const check_user = query(user_db, where("email", "==", email));
    const get_user = await getDocs(check_user);

    if (get_user.empty) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const team_details = get_user.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))[0];

    return NextResponse.json(
      { success: true, team: team_details },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching team details:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

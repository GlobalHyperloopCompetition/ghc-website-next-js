import { db } from "../../../firebase/config";
import { NextResponse } from "next/server";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";

export async function POST(request) {
  const body = await request.json();
  const {
    email,
    teamname,
    homeUniversity,
    activemembers,
    attendeventmembers,
    teamrepresentetive,
    emailrepresentetive,
    numberrepresentetive,
    officialteamname,
    teamaddress,
    country,
    postalcode,
    category,
  } = body;

  try {
    // Check whether user exists or not
    const user_db = collection(db, "users");
    const check_user = query(user_db, where("email", "==", email));
    const get_user = await getDocs(check_user);
    const user_details = get_user.docs.map((doc) => doc.data())[0];

    if (
      !get_user.empty &&
      user_details.email &&
      user_details.teamname &&
      user_details.homeUniversity
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Sign Up completed, to edit your details please login.",
        },
        { status: 400 }
      );
    }

    // Update the user details in the exisiting doc
    if (!get_user.empty) {
      const doc_id = get_user.docs[0].id;

      const doc_ref = doc(db, "users", doc_id);

      await setDoc(
        doc_ref,
        {
          teamname: teamname,
          homeUniversity: homeUniversity,
          activemembers: activemembers,
          attendeventmembers: attendeventmembers,
          teamrepresentetive: teamrepresentetive,
          emailrepresentetive: emailrepresentetive,
          numberrepresentetive: numberrepresentetive,
          officialteamname: officialteamname,
          teamaddress: teamaddress,
          country: country,
          postalcode: postalcode,
          category: category,
        },
        { merge: true }
      ); // Merge to update existing fields without overwriting the entire document

      return NextResponse.json(
        { success: true, message: "User details updated successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

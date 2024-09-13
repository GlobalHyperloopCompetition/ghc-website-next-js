
import { db } from "../../../firebase/config";
import { NextResponse } from "next/server";

import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";


export async function GET(request) {

    try {
      const collectionRef = collection(db, "users");
      const snapshot = await getDocs(collectionRef);
      const documents = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data() 
      }));
      console.log(documents)
      return NextResponse.json({success:true,data:documents})
  } catch (error) {
      console.error("Error fetching documents: ", error);
  }
  }
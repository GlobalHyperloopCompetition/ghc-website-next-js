import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
// import * as XLSX from "xlsx";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const dataCollection = collection(db, "users");
  const snapshot = await getDocs(dataCollection);
  // Convert Firestore snapshot to array of objects
  const data = snapshot.docs.map((doc) => ({
    id: doc.id, // Add document ID if needed
    ...doc.data(), // Spread the document fields
  }));


//   // Generate Excel from data
//   const worksheet = XLSX.utils.json_to_sheet(data);
//   const workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

//   // Download the Excel file
//   XLSX.writeFile(workbook, "FirestoreData.xlsx");

  return NextResponse.json(data);
};

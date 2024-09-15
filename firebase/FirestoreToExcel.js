import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";
// import * as XLSX from "xlsx";

const exportDataToExcel = async () => {
  try {
    const dataCollection = collection(db, "users");
    const snapshot = await getDocs(dataCollection);
    // Convert Firestore snapshot to array of objects
    const data = snapshot.docs.map((doc) => ({
      id: doc.id, // Add document ID if needed
      ...doc.data(), // Spread the document fields
    }));
    console.log(data);
    // // Generate Excel from data
    // const worksheet = XLSX.utils.json_to_sheet(data);
    // const workbook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    // // Download the Excel file
    // XLSX.writeFile(workbook, "FirestoreData.xlsx");
  } catch (error) {
    console.error("Error exporting data to Excel: ", error);
  }
};

export { exportDataToExcel };

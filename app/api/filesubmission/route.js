import { NextResponse } from "next/server";
import { db ,app} from "../../../firebase/config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL,getStorage } from 'firebase/storage';


const uploaddate = () => {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}-${month}-${year} ${hours}:${minutes}`;
};

// Helper function to handle file upload to Firebase Storage
const uploadFile = async (teamname, file) => {  
  const date = uploaddate();
  const storage = getStorage(app);
  const filename = `${file.name}-${Date.now()}`;
  
  const fileRef = ref(storage, `${teamname}/${filename}`);
  const uploadResult = await uploadBytes(fileRef, file);  

  return getDownloadURL(uploadResult.ref);
};


export async function POST(req, res) {
  const formData = await req.formData();
  const email=formData.get("email")
  
  const demonstration=formData.get("demonstration")
  const design=formData.get("design")

  try {
    // Query Firestore to find the user
    const user_db = collection(db, "users");
    const check_user = query(user_db, where("email", "==", email));
    const get_user = await getDocs(check_user);
    const user_details = get_user.docs.map((doc) => doc.data())[0];
    


    // Extract team details from user
    const teamname = user_details.teamname;
    const uid = user_details.uid;    
        // Upload files to Firebase Storage and get URLs  
        const [demonstration_file_url, design_file_url] = await Promise.all([
          uploadFile(teamname, demonstration),
          uploadFile(teamname, design),
        ]);
        

    
    

    // Save file URLs in Firestore
    const user_file_db = collection(db, "userfiles");
    await addDoc(user_file_db, {
      email: email,
      teamname: teamname,
      uid: uid,
      demonstrationfile: demonstration_file_url,
      designfile: design_file_url,
    });

    return NextResponse.json({ success: true, message: "Files uploaded successfully" });
  } catch (error) {
    console.warn(error);
    reject(
      NextResponse.json(
        { success: false, message: "Internal Server Error" },
        { status: 500 }
      )
    );
  }
}
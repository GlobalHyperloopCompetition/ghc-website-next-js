import { NextResponse } from "next/server";
import { db } from "../../../firebase/config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import formidable from 'formidable';


import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const uploaddate=()=>{
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear().toString().slice(-2); 
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  }
  

  // Helper function to handle file upload to Firebase Storage
const uploadFile = async (teamname,file) => {
    const date=uploaddate()
    const storage=getStorage(db)
    const fileRef = ref(storage, `${teamname}/${file.name}/${date}`);
    const uploadResult = await uploadBytes(fileRef, file);
    return getDownloadURL(uploadResult.ref);
  };
  
  // export const config = {
  //   api: {
  //     bodyParser: false,
  //   },
  // };
  

export async function POST(request) {
    // let body = await request.json()
    // const { email,demonstration,design } = body
    // const {email}=fields
    const form = new formidable.IncomingForm();
    
      

    try {
        const user_db = collection(db, "users");
        const check_user = query(user_db, where("email", "==", email));
        const get_user = await getDocs(check_user);
        const user_details = get_user.docs.map((doc) => doc.data())[0];

        // checks whether user exists and completed the registration

        if (
            !get_user.empty &&
            user_details.email &&
            user_details.teamname &&
            user_details.homeUniversity
          ) {
            return NextResponse.json(
              {
                success: false,
                message: "Sign Up completed, to edit your details please login.",
              },
              { status: 400 }
            );
          }
          const teamname=user_details.teamname
          const uid=user_details.uid


        //   calling upload function to generate urls

        const demonstration_file_url=await uploadFile(teamname,demonstration)
        const design_file_url=await uploadFile(teamname,design)

          const user_file_db = collection(db, "userfiles");

          const docRef = await addDoc(user_file_db, {
            email:email,
            teamname:teamname,
            uid:uid,
            demonstrationfile:demonstration_file_url,
            designfile:design_file_url
          });
          

        return NextResponse.json({ success: true, message: 'hello' })


    } catch (error) {
        console.warn(error);
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 })
    }
}


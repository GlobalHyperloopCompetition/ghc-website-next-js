import {db} from '../../../Firebase Connection/page'
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export async function POST( request) {
    const body= await request.json()
    const {name,email,college,team_name,password}=body

    try {

        // check weather user exist or not 

        const user_db = collection(db, 'login')
        const check_user = query(user_db, where('email', '==', email))
        const get_user = await getDocs(check_user)

        if (!get_user.empty){
            return NextResponse.json({sucess:'false', message: "user already exists" }, { status: 400 });
        }
         
        // passwording hashing

        const salt=await bcrypt.genSalt(10)
        const hashPass=await bcrypt.hash(password,salt)


        const save_data = await addDoc(user_db, {
            name:name,
            email:email,
            institute:college,
            TeamName:team_name,
            password:password
        })

    } catch (error) {
        console.error(error)
    }

}

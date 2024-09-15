import { NextResponse } from "next/server"
import nodemailer from 'nodemailer';


export async function POST(request) {
    let body=await request.json()
    
    // const googleFormUrl="" // form url and replace entry numbers of input tah (using inspect element property of web browser)
    const googleFormUrl='https://docs.google.com/forms/u/4/d/e/1FAIpQLSdA2w18RBe2lW7Xyxq1cdo8sk-oE_jlmR8YGlbKlyNtdqK_Iw/formResponse'

    const googleFormData = new URLSearchParams();
    googleFormData.append('entry.1272740819', body.name); 
    googleFormData.append('entry.1671601578', body.email);
    googleFormData.append('entry.1973693697', body.message); 


    const transporter = nodemailer.createTransport({
        host: 'smtp2.iitm.ac.in',
        port:465,
        secure:true,
        auth: {
        //   user: process.env.EMAIL_USER,
        user:'ghc@smail.iitm.ac.in',
        //   pass: process.env.EMAIL_PASS, 
        pass:'aliv lnyf wcqo sdpv' 
        },
      });

      const mailOptions = {
        from: 'ghc@smail.iitm.ac.in',
        to: 'ghc@smail.iitm.ac.in',
        subject: ' Contact Form ',
        text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
      };
  
      


    try {
        if (body.email!=='' && body.name!=='' && body.message!==''){

            const googleFormResponse = await fetch(googleFormUrl, {
                method: 'POST',
                body: googleFormData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            // await transporter.sendMail(mailOptions);
            
            return NextResponse.json({success:true})
        }
        
    } catch (error) {
        console.error(error)
    }



}

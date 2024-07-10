import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { db } from '@/Firebase Connection/page'
import { setDoc, doc, addDoc, collection, getDocs, query, where } from 'firebase/firestore'


export const auth = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            try {
                if (account.provider == 'google') {
                    const user_db = collection(db, 'login')
                    const check_user = query(user_db, where('email', '==', user.email))
                    const get_user = await getDocs(check_user)
                    if (get_user.empty) {
                        const save_data = await addDoc(user_db, {
                            name: user.name,
                            email: user.email,
                            image: user.image
                        })
                    }
                    else {
                        console.log("user already exists")
                    }
                }

            } catch (error) {
                console.error(error)
            }
            return true

        }

    }
})



export { auth as GET, auth as POST }
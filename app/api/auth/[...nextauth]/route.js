import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/firebase/config";
import {
  setDoc,
  doc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const auth = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        if (account.provider == "google") {
          const user_db = collection(db, "users");
          const check_user = query(user_db, where("email", "==", user.email));
          const get_user = await getDocs(check_user);
          if (get_user.empty) {
            const saved_data = await addDoc(user_db, {
              name: user.name,
              email: user.email,
              profilePictureUrl: user.image,
              uid: user.id,
              emailVerified: profile.email_verified,
            });
            console.log("User added to the database", saved_data);
          } else {
            console.log("user already exists");
          }
        }
      } catch (error) {
        console.error(error);
      }
      return true;
    },
  },
});

export { auth as GET, auth as POST };

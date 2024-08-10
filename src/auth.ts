import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks:{
        async signIn({account, profile}){
        if (
            (account && profile) && 
            (account.provider === "google" && profile.email_verified === true)
            ){
            return true
            }
        return false
        },
    }
})
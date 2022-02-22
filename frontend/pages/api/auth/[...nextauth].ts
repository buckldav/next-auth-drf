import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import fetch from "node-fetch"
import { AuthenticatedUser, DjangoSocialRes } from "../../../types"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        // extract these two tokens
        const { access_token, id_token } = account
        // make a POST request to the DRF backend
        try {
          const response = await fetch(
            "http://127.0.0.1:8000/api/social/login/google/",
            {
              method: "POST",
              body: JSON.stringify({
                access_token,
                id_token,
              }),
              headers: { "Content-Type": "application/json" },
            }
          )

          const json = (await response.json()) as DjangoSocialRes
          ;(user as AuthenticatedUser).accessToken = json.access_token

          return true
        } catch (error) {
          return false
        }
      }
      return false
    },
  },
})

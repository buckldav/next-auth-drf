# Next.js + DRF Tutorial using NextAuth.js

## Overview

NextAuth.js is a complete open source authentication solution.

This is an example application that shows how `next-auth` is applied to a basic Next.js app.

### About NextAuth.js

NextAuth.js is an easy to implement, full-stack (client/server) open source authentication library originally designed for [Next.js](https://nextjs.org) and [Serverless](https://vercel.com). Our goal is to [support even more frameworks](https://github.com/nextauthjs/next-auth/issues/2294) in the future.

Go to [next-auth.js.org](https://next-auth.js.org) for more information and documentation.

Much of this tutorial is adapted from [this medium article by Mahieyin Rahmun](https://mahieyin-rahmun.medium.com/how-to-configure-social-authentication-in-a-next-js-next-auth-django-rest-framework-application-cb4c82be137).

> _NextAuth.js is not officially associated with Vercel or Next.js._

## Getting Started - Part 1

### 1. Clone the repository

```bash
git clone https://github.com/buckldav/next-auth-drf.git
```

### 2. Configure the backend

Visit the `backend/` directory and follow the `README.md` file there.

### 3. Configure the frontend

Visit the `frontend/` directory and follow the `README.md` file there.

### 4. Connect the two together

Here are some instructions catered for those using Google OAuth.

#### Add Social App to Backend

Make sure both your Django and Next.js services are running. Visit [http://127.0.0.1:8000/admin/socialaccount/socialapp/add/](http://127.0.0.1:8000/admin/socialaccount/socialapp/add/) and follow the below picture. You'll be using the same `Client Id` and `Secret Key` that you used to configure your frontend.

![Django Social Auth](/docs/djangoSocialAuth.png)

#### Next.js API Authentication

In the frontend app, install `node-fetch` so that we can use the fetch API in server-side code.

```bash
cd frontend
npm install node-fetch
```

Open `pages/api/auth/[...nextauth].ts`. Replace what's there with the following:

```tsx
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import fetch from "node-fetch";
import { AuthenticatedUser, DjangoSocialRes } from "../../../types";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        // extract these two tokens
        const { access_token, id_token } = account;
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
          );

          const json = (await response.json()) as DjangoSocialRes;
          // store an access token with the user on the frontend
          (user as AuthenticatedUser).accessToken = json.access_token;

          return true;
        } catch (error) {
          return false;
        }
      }
      return false;
    },
  },
});
```

Log in with the frontend, and you should see the your Google Account information be saved in the backend at [http://127.0.0.1:8000/admin/socialaccount/socialaccount/](http://127.0.0.1:8000/admin/socialaccount/socialaccount/).

![Social Register](/docs/socialRegister.png)

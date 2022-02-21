# Next.js + DRF Tutorial using NextAuth.js

## Overview

NextAuth.js is a complete open source authentication solution.

This is an example application that shows how `next-auth` is applied to a basic Next.js app.

### About NextAuth.js

NextAuth.js is an easy to implement, full-stack (client/server) open source authentication library originally designed for [Next.js](https://nextjs.org) and [Serverless](https://vercel.com). Our goal is to [support even more frameworks](https://github.com/nextauthjs/next-auth/issues/2294) in the future.

Go to [next-auth.js.org](https://next-auth.js.org) for more information and documentation.

Much of this tutorial is adapted from [this medium article by Mahieyin Rahmun](https://mahieyin-rahmun.medium.com/how-to-configure-social-authentication-in-a-next-js-next-auth-django-rest-framework-application-cb4c82be137).

> _NextAuth.js is not officially associated with Vercel or Next.js._

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/buckldav/next-auth-drf.git
```

### 2. Configure the backend

Visit the `backend/` directory and follow the `README.md` file there.

### 3. Configure the frontend

Visit the `frontend/` directory and follow the `README.md` file there.

#### Database

A database is needed to persist user accounts and to support email sign in. However, you can still use NextAuth.js for authentication without a database by using OAuth for authentication. If you do not specify a database, [JSON Web Tokens](https://jwt.io/introduction) will be enabled by default.

You **can** skip configuring a database and come back to it later if you want.

For more information about setting up a database, please check out the following links:

- Docs: [next-auth.js.org/adapters/overview](https://next-auth.js.org/adapters/overview)
- Adapters Repo: [nextauthjs/adapters](https://github.com/nextauthjs/adapters)

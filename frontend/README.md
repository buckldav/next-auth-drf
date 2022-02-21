# Frontend

## Setup

### 1. Install dependencies

```bash
# Install dependencies
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.local.example .env.local
```

In .env.local, add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).

### 3. Configure Authentication Providers

1. Review and update options in `pages/api/auth/[...nextauth].js` as needed.

2. When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

A list of configured providers and their callback URLs is available from the endpoint `/api/auth/providers`. You can find more information at https://next-auth.js.org/configuration/providers/oauth

3. You can also choose to specify an SMTP server for passwordless sign in via email.

### 4. Start the application

To run your site locally, use:

```

npm run dev

```

To run it in production mode, use:

```

npm run build
npm run start

```

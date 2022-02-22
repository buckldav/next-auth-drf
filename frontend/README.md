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

#### Setup Google OAuth

Head over to the [Google Developer Console](https://console.cloud.google.com/), create a new project and generate an OAuth Client ID (namely, CLIENT_ID and CLIENT_SECRET). You may have to add a few test users while in development phase as per Google’s new policies.

![Google OAuth Create](/docs/googleOAuth.png)

Store the CLIENT_ID and CLIENT_SECRET in the .env.local file.

### 4. Start the application

To run your site locally, use:

```bash
npm run dev
```

At this point, the frontend and backend are not connected, but you can try running the frontend and logging in. With no backend configured, you can still log in with JSON Web Tokens (JWTs).

[Session vs. Token Authentication](https://www.youtube.com/watch?v=UBUNrFtufWo)

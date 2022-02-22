import { User } from "next-auth"

export interface AuthenticatedUser extends User {
  accessToken?: string
  refreshToken?: string
}

export interface DjangoSocialRes {
  access_token: string
  refresh_token: string
  user: {
    id: string
    username: string
    email: string
    password: string
  }
}

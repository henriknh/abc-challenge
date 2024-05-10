import clientPromise from '../lib/mongodb'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import type { NextAuthOptions } from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import Google from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ], // rest of your config


  adapter: MongoDBAdapter(clientPromise) as Adapter,
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = user.id

      return session
    }
  },
}

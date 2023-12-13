import type { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import prisma from '../../../../lib/prisma';

export const options: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      id: 'signin',
      credentials: {
        email: { label: "email", type: "text"},
        password: {  label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password ) {
           throw new Error('Enter the valid data')
        }

        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (user) {
          if (user.password !== credentials.password) {
            throw new Error('Enter the correct password')
          }
          return Promise.resolve(user);
        } else {
          throw new Error('User not found')
        }
      },
    }),
    Credentials({
      id: 'signup',
      credentials: {
        firstName: {label: 'firstName', type: 'string', required: true},
        lastName: {label: 'lastName', type: 'string', required: true},
        email: {
          label: 'email',
          type: 'email',
          required: true,
        },
        password: {label: 'password', type: 'password', required: true},
        subscribe: {label: 'subscribe', type: 'boolean', required: true},
      },
      authorize: async (credentials) => {
        const currentUser = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (currentUser) {
          throw new Error('User already exist');
        }

        const userResponse = await prisma.user.create({
          data: {
            firstName: credentials?.firstName,
            lastName: credentials?.lastName,
            email: credentials?.email,
            password: credentials?.password as string,
            subscribe: !!credentials?.subscribe
          }
        });

        return userResponse;
      },
    }),
  ],
  pages: {
    signIn: '/auth/sign-in',
  }
}

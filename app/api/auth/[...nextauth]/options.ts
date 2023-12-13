/* tslint ignore */
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import prisma from '../../../../lib/prisma';
import {hashSync, compareSync} from "bcrypt"

export const options = {
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
      id: 'credentials',
      credentials: {},
      async authorize(credentials: {
          firstName: string,
          lastName: string,
          email: string,
          password: string,
          subscribe: boolean
      }) {
        console.log('credentials', credentials)

        const currentUser: { email: string, password: string } = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (!currentUser) {
          return { error:  "User is not fount"};
        }

        const isValid = compareSync(
          credentials.password,
          currentUser.password,
        )

        console.log(isValid, currentUser.password, credentials.password)

        if (!isValid) {
          return { error:  "Enter the correct password"}
        } else {
          return { error:  ""} as any;
        }
      }
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
      authorize: async (credentials: {
          firstName: string,
          lastName: string,
          email: string,
          password: string,
          subscribe: boolean
      }) => {
        const currentUser: { email: string }= await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (currentUser) {
          return  {error: 'User already exist'}
        }

        const userResponse = await prisma.user.create({
          data: {
            firstName: credentials?.firstName,
            lastName: credentials?.lastName,
            email: credentials?.email,
            password: hashSync(credentials?.password, 7),
            subscribe: !!credentials?.subscribe
          }
        });

        const {password, ...newUser} = userResponse;
        if (!newUser) {
          throw new Error('Please try again');
        }

        return newUser;
      }
    } as any),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(17)
      if(user?.error) {
        throw new Error(user.error)
      }

      return user;
    }
  },
  pages: {
    signIn: '/auth/sign-in'
  }
}

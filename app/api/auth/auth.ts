import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from '@/lib/models'
import connectToDb from '@/lib/connectToDb'
import bcrypt from 'bcryptjs'

const validateCredentials = (username: unknown, password: unknown): boolean => {
  return typeof username === 'string' && 
         typeof password === 'string' && 
         username.length > 0 && 
         password.length > 0
}

const authenticateUser = async (username: string, password: string) => {
        await connectToDb()
          const user = await User.findOne({ username })
  return user && await bcrypt.compare(password, user.password) ? user : null
          }

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credential',
      credentials: {
        username: { type: 'text', required: true },
        password: { type: 'password', required: true },
      },
      async authorize(credentials) {
        const username = credentials?.username
        const password = credentials?.password

        if (!validateCredentials(username, password)) {
          throw new Error('Invalid credentials')
        }

        try {
          return await authenticateUser(username as string, password as string)
        } catch (err) {
          throw new Error(err instanceof Error ? err.message : String(err))
        }
      },
    }),
  ],

  callbacks: {
    async redirect({  baseUrl }:{baseUrl: string}) {
      return `${baseUrl}`
    },
   

},
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt', 
    maxAge: 30 * 24 * 60 * 60
  },
} as const

const authOptionsFixed = {
  ...authOptions,
  providers: Array.from(authOptions.providers)
}
export const { 
  auth, 
  handlers: { GET, POST }, 
  signIn, 
  signOut 
} = NextAuth(authOptionsFixed)

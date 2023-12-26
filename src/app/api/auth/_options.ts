import type { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch('https://vacancy-api-0jon.onrender.com/api/tokens/refresh-token', {
    method: 'GET',

    headers: {
      Authorization: `Bearer ${token.refreshToken}`,
      'token-type': 'refresh_token',
    },
  });

  const response = await res.json();

  token.accessToken = response.accessToken;
  token.refreshToken = response.refreshToken;
  return {
    ...token,
  };
}

export const authOptions = {
  pages: {
    signIn: '/',
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      name: 'GoogleProvider',
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),

    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const { email, password } = credentials;
        const res = await fetch('https://vacancy-api-0jon.onrender.com/api/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.status === 401 || res.status === 400) {
          console.log('401', res.statusText);

          return null;
        }
        console.log('ppp');
        const data = await res.json();
        return data;
      },
    }),
  ],
  callbacks: {
    async jwt(props) {
      const { user, token } = props;

      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        return token;
      }
      // @ts-ignore
      if (Math.floor(new Date().getTime() / 1000) < token?.exp) return token;

      return await refreshToken(token);
    },
    // @ts-ignore
    async session({ token, session }) {
      if (!session) {
        return null;
      }
      const res = await fetch('https://vacancy-api-0jon.onrender.com/api/users/current', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          'token-type': 'access_token',
        },
      });
      if (res.status == 401) {
        console.log('401', res.statusText);

        return null;
      }

      const user = await res.json();
      session.user = user;
      session.accessToken = token.accessToken;

      return session;
    },
  },
} satisfies NextAuthOptions;

//

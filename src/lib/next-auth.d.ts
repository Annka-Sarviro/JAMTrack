import 'next-auth';

declare module 'next-auth' {
  // interface SessionOptions { },
  interface Session {
    user?: {
      id: string;
      email: string;
      avatarURL: string;
      username: string;
      gitLink: string;
      resume: string;
      projects: string;
      coverLetter: string;
      verified: string;
      vacancy: [];
    };
    accessToken: string;
  }
  interface User {
    accessToken: string;
    refreshToken: string;
  }
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    iat?: number;
    exp?: 1703712769;
    jti?: string;
  }
}

import 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    iat?: number;
    exp?: 1703712769;
    jti?: string;
  }
}

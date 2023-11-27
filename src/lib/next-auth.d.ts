import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      email: string;
      username: string;
    };

    token: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}

import 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: number;
      email: string;
      username: string;
    };

    token: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}

'use client';

import { signIn } from 'next-auth/react';

export const GoogleButton = () => {
  // <a
  //   className="flex items-center bg-[#4285F4] w-fit p-[1px] shadow-[0_1px_1px_0_#0000002B,0_0_1px_0_#00000015]"
  //   href="https://vacancy-api.onrender.com/api/google"
  // >
  //   <ICONS.GOOGLE width="42px" height="42px" />
  //   <span className="text-white px-2">Continue with Google</span>
  // </a>

  // const { data: session } = useSession();
  // console.log(session);

  return (
    <button
      onClick={() => signIn()}
      className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      signin
    </button>
  );
};

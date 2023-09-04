import { ICONS } from '@/components/icons';

export const GoogleButton = () => {
  return (
    <a
      className="flex items-center bg-[#4285F4] w-fit p-[1px] shadow-[0_1px_1px_0_#0000002B,0_0_1px_0_#00000015]"
      href="https://vacancy-api.onrender.com/api/google"
    >
      <ICONS.GOOGLE width="42px" height="42px" />
      <span className="text-white px-2">Continue with Google</span>
    </a>
  );
};

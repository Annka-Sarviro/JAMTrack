import { UserSideBar } from '@/section/UserSideBar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <UserSideBar />
      {children}
    </section>
  );
}

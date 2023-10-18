import { getDictionary, languages } from '@/app/i18n/settings';
import { UserSideBar } from '@/section/UserSideBar';

export async function generateStaticParams() {
  return languages.map(lang => ({ lang }));
}

export default async function DashboardLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const allData = await getDictionary(lang, 'usersidebar');

  return (
    <section>
      <UserSideBar data={allData} />
      {children}
    </section>
  );
}

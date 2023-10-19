import { getDictionary, languages } from '@/app/i18n/settings';
import { UserSideBar } from '@/section/UserSideBar';
import { getStorageLang } from '@/utils/getStorageLang';

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
      <UserSideBar data={allData} storeLang={getStorageLang()} />
      {children}
    </section>
  );
}

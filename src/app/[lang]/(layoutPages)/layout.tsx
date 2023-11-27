import { Locale, i18n } from '@/i18n.config';
import { UserSideBar } from '@/section/UserSideBar';

import { authOptions } from '@/app/api/auth/_options';
import { getDictionary } from '@/lib/dictionary';
import { getStorageBar } from '@/utils/getStorageBar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function DashboardLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const data = await getDictionary(lang);
  const session = await getServerSession(authOptions);
  console.log('sess', session);
  if (!session) {
    redirect('/');
  }

  return (
    <section>
      <UserSideBar data={data} openBar={getStorageBar()} />
      {children}
    </section>
  );
}

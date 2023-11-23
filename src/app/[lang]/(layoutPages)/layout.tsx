import { Locale, i18n } from '@/i18n.config';
import { UserSideBar } from '@/section/UserSideBar';

import { getDictionary } from '@/lib/dictionary';
import { getStorageBar } from '@/utils/getStorageBar';

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

  return (
    <section>
      <UserSideBar data={data} openBar={getStorageBar()} />
      {children}
    </section>
  );
}

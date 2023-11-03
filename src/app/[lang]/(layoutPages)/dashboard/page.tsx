import { languages } from '@/app/i18n/settings';
import { VacansySection } from '@/section/VacansySection';

export async function generateStaticParams() {
  return languages.map(lang => ({ lang }));
}

const UserPage = ({ params: { lang } }: { params: { lang: string } }) => {
  return (
    <main>
      <VacansySection lang={lang} />
    </main>
  );
};

export default UserPage;

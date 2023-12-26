import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

// import { authOptions } from '@/app/api/auth/_options';
// import { getServerSession } from 'next-auth';

import { LoginForm } from '@/components/forms';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { text } = await getDictionary(lang);
  // const session = await getServerSession(authOptions);
  // const user = session?.user;

  return (
    <section className="py-24">
      <div className="container">
        <p className="text-gray-500">{text}</p>

        <div className="mt-6">
          {/* <pre className="mt-4">
            <code>{JSON.stringify({ name: user?.name }, null, 2)}</code>
          </pre> */}

          <LoginForm />
        </div>
      </div>
    </section>
  );
}

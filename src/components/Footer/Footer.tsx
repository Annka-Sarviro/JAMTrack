import { addTranslation } from '@/app/i18n/';
import Paragraph from '../typography/Paragraph';

const Footer = async ({ lang }: { lang: string }) => {
  const { t } = await addTranslation(lang, 'footer');
  return (
    <footer>
      <div className="container">
        <Paragraph variant="black" centered>
          {t('text')}
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;

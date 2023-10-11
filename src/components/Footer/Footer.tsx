import Paragraph from '../typography/Paragraph';

import data from '@/data/footer.json';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Paragraph variant="black" centered>
          {data.text}
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;

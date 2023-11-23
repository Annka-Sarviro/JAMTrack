import Paragraph from '../typography/Paragraph';

type dataType = {
  data: {
    text: string;
  };
};

const Footer = async ({ data }: dataType) => {
  const { text } = data;
  return (
    <footer>
      <div className="container">
        <Paragraph variant="black" centered>
          {text}
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;

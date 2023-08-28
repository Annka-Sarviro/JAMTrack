import Button from '@/components/button/Button/Button';
import IconButton from '@/components/button/IconButton/';
import Paragraph from '@/components/typography/Paragraph/Paragraph';
import { Title } from '@/components/typography/Title/Title';
import UserImg from '../../public/icons/user.svg';

export default function Home() {
  return (
    <main className="bg-green_back">
      <Title tag="h1" variant="black">
        Main page
      </Title>
      <Title tag="h2" variant="dark">
        Super puper site
      </Title>
      <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Paragraph>

      <Button variant="colored" size="small">
        Click
      </Button>

      <IconButton label="userIcon" accent>
        <UserImg className="w-7 fill-inherit " />
      </IconButton>
    </main>
  );
}

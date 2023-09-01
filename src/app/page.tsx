import Button from '@/components/button/Button/Button';
import IconButton from '@/components/button/IconButton/';
import Input from '@/components/common/Input';
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
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '24px',
          width: '50%',
        }}
      >
        <Input type="text" label="E-mail" name="login" />
        <Input type="password" label="Password" name="pass" button />
      </form>

      <Button variant="colored" size="small">
        Click
      </Button>

      <IconButton label="userIcon" accent>
        <UserImg className="w-7 fill-inherit " />
      </IconButton>
    </main>
  );
}

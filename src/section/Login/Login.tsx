import Section from '@/components/common/Section';
import { LoginForm } from '@/components/forms';

export const Login = () => {
  return (
    <Section className="">
      <div className="container">
        <LoginForm className="flex flex-col p-6 w-[486px]" />
      </div>
    </Section>
  );
};

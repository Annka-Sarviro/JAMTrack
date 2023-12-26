'use client';
import { RegForm } from '@/components/forms/RegForm';
// import { Button } from '@/components/Button';
// import InputBox from '@/components/InputBox';

const SignupPage = () => {
  return (
    <RegForm />
    // <div className="m-2 border rounded overflow-hidden shadow">
    //   <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600">Sign up</div>
    //   <div className="p-2 flex flex-col gap-6">
    //     <input
    //       autoComplete="off"
    //       name="username"
    //       required
    //       onChange={e => (data.current.name = e.target.value)}
    //     />
    //     <input name="email" required onChange={e => (data.current.email = e.target.value)} />
    //     <input
    //       name="password"
    //       type="password"
    //       required
    //       onChange={e => (data.current.password = e.target.value)}
    //     />
    //     <div className="flex justify-center items-center gap-2">
    //       <button onClick={register}>Submit</button>
    //       <Link className="" href={'/'}>
    //         Cancel
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SignupPage;

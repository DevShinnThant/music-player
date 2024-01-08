import SignInForm from "../(components)/SignInForm";

export default function SignIn() {
  return (
    <div className="flex flex-col items-start">
      <div className="text-2xl font-bold text-blue-500 tracking-wider">
        Sign In
      </div>
      <SignInForm />
    </div>
  );
}

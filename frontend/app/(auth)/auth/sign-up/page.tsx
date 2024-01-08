import SignUpForm from "../(components)/SignUpForm";

export default function SignUp() {
  return (
    <div className="flex flex-col items-start">
      <div className="text-2xl font-bold text-blue-500 tracking-wider">
        Sign Up
      </div>
      <SignUpForm />
    </div>
  );
}

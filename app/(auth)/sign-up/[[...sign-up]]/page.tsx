import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex-center min-h-screen ">
      <SignUp />
    </div>
  );
}

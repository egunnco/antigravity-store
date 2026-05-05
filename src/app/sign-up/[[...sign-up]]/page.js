import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh',
      padding: '4rem 2rem' 
    }}>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </main>
  );
}

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh',
      padding: '4rem 2rem',
      background: '#fafafa'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', fontWeight: 400, margin: 0 }}>Create an Account</h1>
        <p style={{ fontFamily: 'var(--font-inter)', color: '#666', marginTop: '0.5rem' }}>Join Elizabeth Gunn & Co.</p>
      </div>
      <SignUp 
        path="/sign-up" 
        routing="path" 
        signInUrl="/sign-in" 
        appearance={{
          elements: {
            header: { display: 'none' },
            card: { boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }
          }
        }}
      />
    </main>
  );
}

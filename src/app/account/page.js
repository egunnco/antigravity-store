import { UserProfile } from "@clerk/nextjs";

export default function AccountPage() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      minHeight: '80vh',
      padding: '4rem 2rem' 
    }}>
      <h1 style={{ 
        fontFamily: 'var(--font-playfair)', 
        fontSize: '2.5rem', 
        marginBottom: '2rem' 
      }}>
        My Account
      </h1>
      <UserProfile path="/account" routing="path" />
    </main>
  );
}

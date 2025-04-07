import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Welcome to Child Arrangements Help
      </h1>
      <p style={{ maxWidth: '600px', lineHeight: '1.6', marginBottom: '2rem' }}>
        We provide free guidance and support for parents navigating child arrangement orders, legal aid, and more. 
        Use our AI chatbot to ask questions, or connect with a McKenzie friend for assistance.
      </p>
      <Link href="/chat">
        <button style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontSize: '1rem',
          border: 'none',
          cursor: 'pointer'
        }}>
          Ask the AI a Question
        </button>
      </Link>
    </div>
  );
}

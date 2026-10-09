'use client';
import { useState } from 'react';

export default function Home() {
  const [textFromBackend, setTextFromBackend] = useState('');

  const callBackend = async () => {
    const response = await fetch('/api/hello');
    const data = await response.json();
    setTextFromBackend(data.message);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '20px', fontFamily: 'sans-serif' }}>
      <h1>My Pipeline is Fully Automated</h1>
      <button onClick={callBackend} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
        Call Backend API
      </button>
      {textFromBackend && <p style={{ color: 'green', fontSize: '18px', fontWeight: 'bold' }}>{textFromBackend}</p>}
    </div>
  );
}
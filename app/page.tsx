import React from 'react';
import Header from './components/Header';
import ClientHome from './components/client-home-component';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-color">
      <Header />
      <ClientHome />
    </main>
  );
}
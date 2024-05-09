// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Layout from './layout';
import ChatApp from './components/ChatApp';
import { AuthProvider } from './contexts/AuthContext';

const Home: React.FC = () => {
  return (
      <AuthProvider>
          <ChatApp />
      </AuthProvider>
  );
};

export default Home;

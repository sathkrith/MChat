// pages/index.tsx
import React from 'react';
import ChatApp from './components/ChatApp';
import { AuthProvider } from './contexts/AuthContext';
import Protected from './components/Protected';

const Home: React.FC = () => {
  return (
      <AuthProvider>
        <Protected>
          <ChatApp />
        </Protected>
      </AuthProvider>
  );
};

export default Home;

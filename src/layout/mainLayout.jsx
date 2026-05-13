import React from 'react';
import Header from '../components/Header/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        {children} 
      </main>
    </div>
  );
};

export default MainLayout;
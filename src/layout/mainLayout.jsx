import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const MainLayout = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import { LayoutProps } from '../types/Layout';



const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
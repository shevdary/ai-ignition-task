import React, { FC } from 'react';
import Header from "../Header";

interface Props {
  children: React.ReactNode;
}

const Layout:FC<Props> = ({ children }) => (
  <>
    <Header />
    <main className="bg-primary h-full min-h-full">
      {children}
    </main>
  </>
);

export default Layout;

'use client'
import React, { FC } from 'react';
import Header from "../Header";

interface Props {
  children: React.ReactNode;
}

const Layout:FC<Props> = ({ children }) => {
  return  (
    <div>
      <Header/>
      <main className="bg-primary h-full min-h-full lg:min-h-[1131px]">
        {children}
      </main>
    </div>
  );
}

export default Layout;

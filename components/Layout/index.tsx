'use client'
import React, { FC } from 'react';
import Header from "../Header";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const Layout:FC<Props> = ({ children }) => {
  return  (
    <div>
      <Header/>
      <main className="bg-primary h-full min-h-full">
        {children}
      </main>
    </div>
  );
}

export default Layout;

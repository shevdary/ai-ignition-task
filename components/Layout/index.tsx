'use client'
import React, { FC } from 'react';
import Header from "../Header";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const Layout:FC<Props> = ({ children }) => {
  const router = useRouter()

  const { data: session, status } = useSession();
  console.log(session, 'as', status)
  if (!session) {

  }

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

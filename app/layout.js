import React from 'react';
import Link from 'next/link';
import header from './header';  // Import the header component
import { ContextProvider } from '@/Components/client';
export const metadata = {
  title: "Nexjs-Project",
  description: "Todo App Project to learn Next js Concepts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>

          <header />
        {children}
        </ContextProvider>
          
      </body>
    </html>
  );
}

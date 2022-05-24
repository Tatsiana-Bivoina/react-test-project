import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <main data-testid="main">
        <Outlet />
      </main>
    </>
  );
};

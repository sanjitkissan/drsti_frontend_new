import Head from 'next/head';
import React from 'react'
import { ReactElement } from "react";
import Footer from './Footer';
import Navbar from './Navbar';
import NewFooter from './NewFooter';
import ResponsiveNaveBar from './ResponsiveNaveBar';
type prop = {
    title?: string;
    children: ReactElement | ReactElement[];
  };
export default function MainLayout({children }:prop) {
  return (
    <>
    <Head>
        
        <link rel="icon" href="/drsti_logo.jpg"></link>
    </Head>
    <ResponsiveNaveBar/>
     <Navbar/>
     <>{children}</>
     {/* <Footer/>  */}
     <NewFooter/>
    </>
  )
}

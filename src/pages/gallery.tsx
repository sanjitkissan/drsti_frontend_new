import React from 'react'
import MainForm from '../components/form/MainForm'
import Breadcrumb from '../components/gallery/Breadcrumb'
import HeroSection from '../components/gallery/HeroSection'
import Photos from '../components/gallery/Photos'
import MainLayout from '../layouts/MainLayout'
import Head from 'next/head'
import NewPhoto from '../components/gallery/NewPhoto'

export default function Gallery() {
  return (
    <>
     <Head>
        <title></title>
        <meta name="description" content="Meta description content goes here." />
        <meta name="keywords" content="video streaming, the rock" />
    </Head>
    <MainLayout title="drsti-gallery">
      <MainForm/>
      {/* <Breadcrumb/> */}
      <HeroSection/>
      <NewPhoto/>
      {/* <Photos/> */}
    </MainLayout>
    </>
  )
}

import Blogpageiner from "../components/blogpage/Blogpageiner";
import MainForm from "../components/form/MainForm";
import Brandactivation from "../components/landingPage/BrandActivation";
import Breadcrumb from "../components/landingPage/Breadcrumb";
import CardSection from "../components/landingPage/CardSection";
import HeroSection from "../components/landingPage/HeroSection";
import LinkedInPosts from "../components/landingPage/LinkedInPost";
import MessageSection from "../components/landingPage/MessageSection";
import NewBreadcrumb from "../components/landingPage/NewBreadcrumb";
import OurReachSection from "../components/landingPage/OurReachSection";
import OurWork from "../components/landingPage/OurWork";
import RoadMap from "../components/landingPage/RoadMap";
import RoadMapResponsive from "../components/landingPage/RoadMapResponsive";
import SesponsiveBreadcrumb from "../components/landingPage/SesponsiveBreadcrumb";
import MainLayout from "../layouts/MainLayout";
import Head from 'next/head';

import React, {useState, useEffect, Fragment} from 'react';


export default function Home() {

  const [uplord, setUplord]=useState<any>([])
    

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://admin.drsti-ooh.com/api/home-seos');
              const jsonData = await response.json();
              // console.log(jsonData.data)
              // const preData=jsonData.data
              // const newData=[]
              // const postData=newData.push(preData)
              setUplord(jsonData.data);

          } catch (error) {
              console.log(error);
          }
      };

      fetchData();
  }, [])

console.log(uplord)
  return (
  <>
    <Head>
      {
        uplord.map((item:any, index:number)=>(
          <Fragment key={index}>
          <title>{item.attributes.title}</title>
        <meta name="description" content={item.attributes.description} />
        <meta name="keywords" content={item.attributes.keyword} />
          </Fragment>
        ))
      }
       
    </Head>
    <MainLayout>
      {/* <Blogpageiner/> */}
      <MainForm/>
      <SesponsiveBreadcrumb/>
      <Breadcrumb/>
      <HeroSection/>
      <OurReachSection/>
      {/* <RoadMap/>
      <RoadMapResponsive/> */}
      
      <CardSection/>   
      <MessageSection/>
      <LinkedInPosts/>

    </MainLayout>
    </>
  )
}

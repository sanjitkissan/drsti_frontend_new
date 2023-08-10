import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/about/Breadcrumb';
import CreateEvents from '../components/about/CreateEvents';
import OurPartners from '../components/about/OurPartners';
import OurTeam from '../components/about/OurTeam';
import WhyChoose from '../components/about/WhyChoose';
import MainForm from '../components/form/MainForm';
import MainLayout from '../layouts/MainLayout';
import Head from 'next/head';
import RoadMap from '../components/landingPage/RoadMap';
import RoadMapResponsive from '../components/landingPage/RoadMapResponsive';


function About() {
    const [uplord, setUplord]=useState<any>([])
    

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://admin.drsti-ooh.com/api/about-seos');
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
    return (
        <>
        <Head>
        {
        uplord.map((item:any, index:number)=>(
          <>
          <title>{item.attributes.title}</title>
        <meta name="description" content={item.attributes.description} />
        <meta name="keywords" content={item.attributes.keyword} />
          </>
        ))
      }
    </Head>
        <MainLayout>
            <MainForm/>
            {/* <Breadcrumb/> */}
            <RoadMap/>
            <RoadMapResponsive/>
            {/* <CreateEvents/> */}
            <OurTeam/>
            <WhyChoose/>
          
        </MainLayout>
        </>
    );
}

export default About;
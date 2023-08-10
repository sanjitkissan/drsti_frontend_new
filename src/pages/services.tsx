import Head from "next/head";
import OurPartners from "../components/about/OurPartners";
import MainForm from "../components/form/MainForm";
import Brandactivation from "../components/landingPage/BrandActivation";
import OurWork from "../components/landingPage/OurWork";
import Breadcrumb from "../components/services/Breadcrumb";
import HeroSection from "../components/services/HeroSection";
import OurImpactResponsive from "../components/services/OurImpactResponsive";
import OurPortfolio from "../components/services/OurPortfolio";
import WorkForResult from "../components/services/WorkForResult";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";


export default function Services(){
    const [uplord, setUplord]=useState<any>([])
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://admin.drsti-ooh.com/api/services-seos');
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
    return(
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
        <MainLayout title="drsti-service">
            <MainForm/>
            {/* <Breadcrumb/> */}
            {/* <HeroSection/> */}
            <WorkForResult/>
            <OurWork/>
      <Brandactivation/>
      <OurPartners/>
           
        </MainLayout>
        </>
    )
}
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/drstinewblog/Breadcrumb';
import Newblogs from '../components/drstinewblog/Newblogs';
import MainForm from '../components/form/MainForm';
import MainLayout from '../layouts/MainLayout';
import Head from 'next/head';

function Blog() {
    const [uplord, setUplord]=useState<any>([])
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://admin.drsti-ooh.com/api/blog-seos');
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


        <MainLayout title="drsti-blog">
            <MainForm/>
            <Breadcrumb/>
          <Newblogs/>
            
        </MainLayout>
        </>
    );
}

export default Blog;
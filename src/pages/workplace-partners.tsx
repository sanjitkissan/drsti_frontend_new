import React from 'react';
import MainForm from '../components/form/MainForm';
import OurImpactResponsive from '../components/services/OurImpactResponsive';
import OurPortfolio from '../components/services/OurPortfolio';
import Breadcrumb from '../components/workplace/Breadcrumb';
import Oursolutions from '../components/workplace/Oursolutions';
import Partners from '../components/workplace/Partners';
import Workplace from '../components/workplace/Workplace';
import MainLayout from '../layouts/MainLayout';
import Head from 'next/head';

function WorkplacePartners() {
    return (
        <>
         <Head>
        <title></title>
        <meta name="title" content="Meta description content goes here." />
        <meta name="description" content="Meta description content goes here." />
       </Head>
        <MainLayout title="drsti-workplacepartners">
            <MainForm/>
            <Breadcrumb/>
            <Workplace/>
            <Oursolutions/>
            <OurPortfolio/>
            <OurImpactResponsive/>
            <Partners/>
        </MainLayout>
        </>
    )
}

export default WorkplacePartners;
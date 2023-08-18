import React, { useState, useEffect } from "react";
import { Dialog } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function NewPhoto() {
  const [isStatic, setIsStatic] = useState<any>(true);
  const [isDigital, setIsDigital] = useState<any>(false);
  const [isActivation, setIsActivation] = useState<any>(false);

  const [staticData, setStaticData] = useState<any>([])
  const [digitalData, setDigitalData] = useState<any>([])
  const [activationData, setActivationData] = useState<any>([])

  useEffect(() => {
    const fetchStaticData = async () => {
        try {
            const response = await fetch('https://admin.drsti-ooh.com/api/statics');
            const jsonData = await response.json();
            // console.log(jsonData.data)
            // const preData=jsonData.data
            // const newData=[]
            // const postData=newData.push(preData)
            setStaticData(jsonData.data);

        } catch (error) {
            console.log(error);
        }
    };

    fetchStaticData();
}, [])

useEffect(() => {
    const fetchActivationData = async () => {
        try {
            const response = await fetch('https://admin.drsti-ooh.com/api/activations');
            const jsonData = await response.json();
            // console.log(jsonData.data)
            // const preData=jsonData.data
            // const newData=[]
            // const postData=newData.push(preData)
            setActivationData(jsonData.data);

        } catch (error) {
            console.log(error);
        }
    };

    fetchActivationData();
}, [])

useEffect(() => {
    const fetchDigitalData = async () => {
        try {
            const response = await fetch('https://admin.drsti-ooh.com/api/digitals');
            const jsonData = await response.json();
            // console.log(jsonData.data)
            // const preData=jsonData.data
            // const newData=[]
            // const postData=newData.push(preData)
            setDigitalData(jsonData.data);

        } catch (error) {
            console.log(error);
        }
    };

    fetchDigitalData();
}, [])

console.log(staticData)
console.log(digitalData)
console.log(activationData)
 
  return (
    <section className="w-full main-container flex flex-col items-center justify-center lg:gap-6 gap-28 my-24">
      <div className="w-full h-20 flex flex-col lg:flex-row items-center justify-center gap-8  px-8 py-2 rounded-md">
        <span
          className={`${isStatic && "!border-red-600 !text-red-600"}  h-full py-4 px-12 border-2 !cursor-pointer border-transparent rounded-md center hover:border-black shadow-lg shadow-red-100/50 hover:scale-95 !transition-all duration-500 ease-in-out`}
          onClick={() => {
            setIsStatic(true)
            setIsDigital(false)
            setIsActivation(false)
          }}
        >
          <h1 className="text-lg text-center w-full capitalize">
            {" "}
            static media{" "}
          </h1>
        </span>
        <span
          className={`${isDigital && "!border-red-600 !text-red-600"}  h-full py-4 px-12 border-2 !cursor-pointer border-transparent rounded-md center hover:border-black shadow-lg shadow-red-100/50 hover:scale-95 !transition-all duration-500 ease-in-out`}
          onClick={() => {
            setIsStatic(false)
            setIsDigital(true)
            setIsActivation(false)
          }}
        >
          <h1 className="text-lg text-center w-full capitalize">
            {" "}
            digital OOH{" "}
          </h1>
        </span>
        <span
          className={`${isActivation && "!border-red-600 !text-red-600"}  h-full py-4 px-12 border-2 !cursor-pointer border-transparent rounded-md center hover:border-black shadow-lg shadow-red-100/50 hover:scale-95 !transition-all duration-500 ease-in-out`}
          onClick={() => {
            setIsStatic(false)
            setIsDigital(false)
            setIsActivation(true)
          }}
        >
          <h1 className="text-lg text-center w-full capitalize">
            {" "}
            brand activation{" "}
          </h1>
        </span>
      </div>
      {isStatic && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                staticData?.map((item:any)=>(

                    <img src={item.attributes.url} alt="" className="w-full h-auto lg:h-96 object-cover" key={item.id}/>
                ))
            }
        </div>
      )}

      {isDigital && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                digitalData?.map((item:any)=>(
                    <img src={item.attributes.url} alt="" className="w-full h-auto lg:h-96 object-cover" key={item.id}/>
                ))
            }
        </div>
      )}


        { isActivation &&
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
                activationData.map((item:any)=>(

                    <img src={item.attributes.url} alt="" className="w-full h-auto lg:h-96 object-cover" key={item.id}/>
                ))
            }
      </div>
        }
      
      {/* <Dialog
    fullWidth
    maxWidth={"xl"}
    open={isOpen}
    onClose={()=>{setIsOpen(false)}}
    className='hidden md:block w-full'
  >
    <div className=' w-full h-[80vh] py-8 px-20 relative'>
       <CloseIcon className='!text-red-600 absolute top-5 right-8' onClick={()=>{setIsOpen(false)}} />
       <span className='p-4 rounded-full cursor-pointer absolute top-1/2 right-2 -translate-y-1/2' 
    //    onClick={forword}
        >
            <ArrowForwardIosIcon className='!text-red-600 !font-bold'/>
       </span>
       <span className='p-4 rounded-full cursor-pointer absolute top-1/2 left-2 -translate-y-1/2' 
    //    onClick={reverse} 
       >
            <ArrowForwardIosIcon className='!text-red-600 !font-bold rotate-180'/>
       </span>
        <img src=""
        //  src={galleryPageArr[activeIndex].list[isImage].img.src}
          alt="" className='w-full h-full object-cover'/>
    </div>
  </Dialog> */}
    </section>
  );
}

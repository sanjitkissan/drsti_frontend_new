import Dialog from "@mui/material/Dialog";
import React, { useState,  } from "react";
export default function OTPform({isOpen, setIsOpen, otp}:any) {
    const [newOtp, setNewOtp]=useState<any>(0)
    


    const downloadPDF = () => {
      window.open(
        `https://drive.google.com/file/d/10REt4OydmaUFD4vVvXdXYXYD7Vq9suT2/view`,
        "width=2480,height=3508"
      );
    };
  

    const otpCheck=(event:any)=>{
      setNewOtp(event.target.value)
      
    }
  

    const handleSubmit =(event:any)=>{
        event.preventDefault()
        
        if (otp==newOtp){
          downloadPDF()
          setIsOpen(false);
        }else{
          alert("enter the valid OTP")
        }
    }




   
  return (
    <Dialog
    fullWidth
    maxWidth={"sm"}
    open={isOpen}
    onClose={() => {
      setIsOpen(false);
    }}
  >
    <form action="" className="p-6" onSubmit={handleSubmit}>
        <h2 className="w-full text-center text-xl font-bold m-2 capitalize">please enter the OTP</h2>
    <input type="text" onChange={otpCheck} className="w-full h-16 border border-black m-2 rounded-md px-4" placeholder="enter the otp" />
    <button className="px-6 py-2 rounded-md bg-red-600 font-bold text-white m-2" type="submit" >submit</button>
    </form>
  </Dialog> 
  )
}

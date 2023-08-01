import { Dialog, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { pop_up_img } from "@/src/assets/navbar";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
type FormType = {
  name: string;
  email: string;
  subject: string;
  massage: string;
  otp:number
};
export default function MainForm() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [post, setPost] = useState<any>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [newOtp, setNewOtp]=useState<any>(0)
  const [validateOtpNum, setValidateOtpNum] = useState<Number>()
  const [allData, setAllData] = useState<any>()
  const [isModalopen, setIsModalopen] = useState<boolean>(false)
  useEffect(() => {
    fetch("https://admin.drsti-ooh.com/api/contactfroms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => console.log("data posted successfully"))
      .catch((error) => console.error(error));
      
  }, [post]);
  
  
    
  const otpGenerator = Math.floor(Math.random() * 9000 + 1000);
  const sendOTP = async () => {
    try {
      const response = await axios.get(
        `https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=da7dr2cPjEmBX852N3BFDA&senderid=DRSTIM&channel=2&DCS=0&flashsms=0&number=${formik.values.subject}&text=Dear%20customer,%20your%20One%20time%20OTP%20is%20 ${formik.values.otp}%20to%20verify%20your%20number.%20dRSTi%20Communications&route=1&dlttemplateid=1407168371556276283`
      );
      // console.log(response.data);
      if (response.data && response.data.ErrorCode === "000") {
        // OTP sent successfully
        console.log("OTP sent successfully");
      } else {
        setErrorMessage("Failed to send OTP. Please try again later.");
      }
    } catch (error) {
      setErrorMessage("Failed to send OTP. Please try again later.");
    }
    console.log("OTP sent successfully");
  };
  let initialValues: FormType = {
    name: "",
    email: "",
    subject: "",
    massage: "",
    otp:otpGenerator
  };
  
  const formik = useFormik({
    
    initialValues,

    validationSchema: Yup.object({
      name: Yup.string()
        .required("* Name is required")
        .min(2, "* Enter a valid name"),
        email: Yup.string()
        .email("* Enter a valid E-mail")
        .required("* E-mail is required"),
        subject: Yup.string().required("* subject is required"),

      massage: Yup.string().required("* Write some Message"),
      otp: Yup.number().required("* Write some Message"),
    }),
    onSubmit: (values: FormType, props: FormikHelpers<FormType>) => {
      try{
          // console.log(values)
        setAllData(values);
        setIsModalopen(true)
        sendOTP()
        setValidateOtpNum(formik.values.otp)
      }catch(err){
        console.log(err)
      }finally{
        props.resetForm();
        setIsOpen(false)
      }
    },
  });

  const otpCheck=(event:any)=>{
    setNewOtp(event.target.value)
    
  }

 

  const handleSubmit =(event:any)=>{
      event.preventDefault()
      
      if (validateOtpNum==newOtp){
        setIsModalopen(false);
        setPost(allData)
      }else{
        alert("enter the valid OTP")
      }
  }
 
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full">
     
      <Dialog
        fullWidth
        maxWidth={"md"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <section className="w-full h-full flex flex-col  items-center justify-center relative p-6">
          <h2 className="w-full text-center text-red-600 text-4xl font-bold capitalize">
            get in touch
          </h2>
          <h2 className="w-full text-center  text-2xl font-bold capitalize">
            send enquiry
          </h2>
          <CloseIcon
            className="!text-red-600 !font-bold absolute top-5 right-5 cursor-pointer"
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center p-6">
            <div className="w-full h-full center gap-4">
              <div className="w-full h-full">
                <img
                  src={pop_up_img.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full">
              <form
                onSubmit={formik.handleSubmit}
                className="w-full flex flex-col items-start justify-center gap-4"
              >
                <span className="center w-full gap-2">
                <TextField
                  className="w-full"
                  type={"text"}
                  placeholder="Your name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  className="w-full"
                  name="email"
                  type={"email"}
                  placeholder="Your email Id"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                </span>
                <TextField
                className="w-full"
                name="subject"
                type={"text"}
                placeholder="enter your phone number"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.subject && formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
              />
              <TextField
                className="w-full"
                rows={"3"}
                multiline
                name="massage"
                type={"text"}
                placeholder="Leave your message"
                value={formik.values.massage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.massage && formik.errors.massage)}
                helperText={formik.touched.massage && formik.errors.massage}
              />
              <TextField
                className="w-full opacity-0 h-0"
              
                name="otp"
                type={"number"}
                placeholder="Leave your message"
                value={formik.values.otp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.otp && formik.errors.otp)}
                helperText={formik.touched.otp && formik.errors.otp}
              />
                <button
                  className="w-full rounded-md bg-gradient-to-r from-red-600 to-black text-white text-lg tracking-wider p-4 uppercase z-50"
                  type="submit"
                >
                  send massage
                </button>
              </form>
            </div>
          </div>
        </section>
      </Dialog>
      <Dialog
    fullWidth
    maxWidth={"sm"}
    open={isModalopen}
    onClose={() => {
      setIsModalopen(false);
    }}
  >
    <form action="" className="p-6" onSubmit={handleSubmit}>
        <h2 className="w-full text-center text-xl font-bold m-2 capitalize">please enter the OTP</h2>
    <input type="text" onChange={otpCheck} className="w-full h-16 border border-black m-2 rounded-md px-4" placeholder="enter the otp" />
    {/* <input type="number" name="otpnum" id="" onChange={validateOtp}   value={otpGenerator}/> */}
    <button className="px-6 py-2 rounded-md bg-red-600 font-bold text-white m-2" type="submit" >submit</button>
    </form>
  </Dialog>
    </section>
  );
}

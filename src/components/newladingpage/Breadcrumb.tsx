import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { string } from "yup";
import { FormikHelpers } from "formik/dist/types";
import Swal from "sweetalert2";
import OTPform from "../form/OTPform";
import axios from "axios";
import { Dialog } from "@mui/material";
type FormType = {
  name: string;
  email: string;
  phoneNumber: string;

  companyName: string;
  otp: number;
};
function Breadcrumb() {
  const [post, setPost] = useState<any>();
  const [isOpen, setIsOpen] = useState<any>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState<any>(0);
  const [allData, setAllData] = useState<any>();
  const [newOtp, setNewOtp]=useState<any>(0)

  const downloadPDF = () => {
    window.open(
      `https://drive.google.com/file/d/10REt4OydmaUFD4vVvXdXYXYD7Vq9suT2/view`,
      "width=2480,height=3508"
    );
  };

  const otpGenerator = Math.floor(Math.random() * 9000 + 1000);
  
  useEffect(() => {
    fetch("http://admin.drsti-ooh.com:1337/otp-forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => console.log("updated"))
      .catch((error) => console.error(error));
  }, [post]);

  const sendOTP = async () => {
    try {
      const response = await axios.get(
        `https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=da7dr2cPjEmBX852N3BFDA&senderid=DRSTIM&channel=2&DCS=0&flashsms=0&number=${Formik.values.phoneNumber}&text=Dear%20customer,%20your%20One%20time%20OTP%20is%20 ${Formik.values.otp}%20to%20verify%20your%20number.%20dRSTi%20Communications&route=1&dlttemplateid=1407168371556276283`
      );
      console.log(response.data);
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
    phoneNumber: "",

    companyName: "",
    otp: otpGenerator,
  };

  const Formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string()
      .min(2, "* Enter a valid name"),
      companyName: Yup.string()
        .required("* Company Name is required")
        .min(4, "* Enter a valid Company name"),

      email: Yup.string()
        .email("* Enter a valid E-mail")
        .required("* E-mail is required"),
      phoneNumber: Yup.string()
        .required("* phoneNumber is required")
        .min(7, "* invalid phone number is ")
        .max(15, "* invalid phone number is "),
      otp: Yup.string(),
    }),

    onSubmit: (Value: FormType, props: FormikHelpers<FormType>) => {
      try {
        setAllData(Value);
        sendOTP();
        setOtp(Formik.values.otp)
        setIsOpen(true);
      } catch (error) {
        console.log(error);
      }
      finally{
      
      props.resetForm();
      }
    },
  });


  const otpCheck=(event:any)=>{
    setNewOtp(event.target.value)
    
  }


  const handleSubmit =(event:any)=>{
      event.preventDefault()
      
      if (otp==newOtp){
        downloadPDF()
        setIsOpen(false);
        setPost(allData)
      }else{
        alert("enter the valid OTP")
      }
  }


  return (
    <section className=" bg-gradient-to-r from-black to-red-600 border-b p-4">
      {/* <OTPform isOpen={isOpen} setIsOpen={setIsOpen} otp={otp}/> */}
      <section className="w-full  h-full main-container flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className=" lg:w-4/5 w-full h-full flex items-center justify-start ">
          <form
            onSubmit={Formik.handleSubmit}
            className=" w-full flex flex-col items-center justify-center gap-6 bg-white px-6 py-4 rounded-xl "
          >
            <h1 className="text-3xl text-center font-[Roboto] capitalize">
              Download the Media Deck
            </h1>
            <TextField
              fullWidth
              placeholder="Name"
              name="name"
              type={"text"}
              value={Formik.values.name}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={Boolean(Formik.touched.name && Formik.errors.name)}
              helperText={Formik.touched.name && Formik.errors.name}
            />
            <TextField
              fullWidth
              placeholder="E-mail"
              name="email"
              type={"email"}
              value={Formik.values.email}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={Boolean(Formik.touched.email && Formik.errors.email)}
              helperText={Formik.touched.email && Formik.errors.email}
            />
            <TextField
              fullWidth
              placeholder="Enter your company name"
              name="companyName"
              type={"text"}
              value={Formik.values.companyName}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={Boolean(
                Formik.touched.companyName && Formik.errors.companyName
              )}
              helperText={
                Formik.touched.companyName && Formik.errors.companyName
              }
            />
            <TextField
              fullWidth
              placeholder="Phone Number"
              name="phoneNumber"
              type={"text"}
              value={Formik.values.phoneNumber}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={Boolean(
                Formik.touched.phoneNumber && Formik.errors.phoneNumber
              )}
              helperText={
                Formik.touched.phoneNumber && Formik.errors.phoneNumber
              }
            />

            <TextField
              fullWidth
              placeholder=""
              className="opacity-0 h-1"
              name="otp"
              type={"number"}
              value={Formik.values.otp}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={Boolean(Formik.touched.otp && Formik.errors.otp)}
              helperText={Formik.touched.otp && Formik.errors.otp}
            />

            <button
              className={` ${
                !Formik.isValid
                  ? "bg-gray-800"
                  : "bg-gradient-to-r from-red-600 to-black"
              } w-full center text-white rounded-full font-bold  px-4 py-2  border-b z-50`}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center gap-8">
          <h1 className="text-white text-4xl font-bold center ">
            {" "}
            Engage with working professionals and key decision-makers in premium
            flexible workplaces.
          </h1>
          <p className="text-white text-lg">
            Connect with dRSTi for a high-impact, high-frequency media plan
            within 125+ flexible/hybrid workspaces across India.
          </p>
          <span className="">
            {/* <button className='text-black rounded-full bg-white px-6 py-2 transition-all duration-300 ease-out  '>Get Started</button> */}
          </span>
        </div>
      </section>
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
    </section>
  );
}

export default Breadcrumb;

import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormikHelpers } from "formik/dist/types";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import OTPform from "../form/OTPform";
type FormType = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  companyName: string;
  otp: number;
};

export default function LandingForm(prop: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [post, setPost] = useState<any>();
  const [otp, setOtp] = useState<any>(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOtpOpen, setIsOtpOpen] = useState<any>(false)
  const [allData, setAllData] = useState<any>()
  const [newOtp, setNewOtp]=useState<any>(0)
  const otpGenerator = Math.floor(Math.random() * 9000 + 1000);

  const dataObject = {
    data: post,
  };
  useEffect(() => {
    fetch("http://admin.drsti-ooh.com:1337/otp-forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => console.log("data"))
      .catch((error) => console.error(error));
  }, [post]);

  const sendOTP = async () => {
    try {
      const response = await axios.get(
        `https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=da7dr2cPjEmBX852N3BFDA&senderid=DRSTIM&channel=2&DCS=0&flashsms=0&number=${Formik.values.phoneNumber}&text=Dear%20customer,%20your%20One%20time%20OTP%20is%20 ${Formik.values.otp}%20to%20verify%20your%20number.%20dRSTi%20Communications&route=1&dlttemplateid=1407168371556276283`
      );
      console.log(response.data);
      if (response.data && response.data.ErrorCode === "000") {
        console.log("OTP sent successfully");
      } else {
        setErrorMessage("Failed to send OTP. Please try again later.");
      }
    } catch (error) {
      setErrorMessage("Failed to send OTP. Please try again later.");
    }
    console.log("OTP sent successfully");
  };

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
        setIsOtpOpen(false);
        setPost(allData)
        Swal.fire({
          title: "Thank You For Downloading The Media Deck",
          // text: "Thank you",
          icon: "success",
        });
      }else{
        alert("enter the valid OTP")
      }
  }

  let initialValues: FormType = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    companyName: "",
    otp: otpGenerator,
  };
  const Formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("* Name is required")
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
        setIsOtpOpen(true)
      } catch (error) {
        console.log(error);
      }
      finally{
      props.resetForm();
      }
    },
  });
  return (
    <>
    <section>
      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={prop.isOpen}
        onClose={() => {
          prop.setIsOpen(false);
        }}
      >
        <form
          onSubmit={Formik.handleSubmit}
          className="w-full   flex flex-col items-center justify-center gap-6 bg-white px-6 py-4 rounded-xl relative"
        >
          <CloseIcon
            className="!text-red-600 !font-bold absolute top-5 right-5 cursor-pointer"
            onClick={() => {
              prop.setIsOpen(false);
            }}
          />
          <h1 className="text-3xl text-center  font-bold uppercase">
            Contact for advertising
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
            placeholder="Phone Number"
            name="phoneNumber"
            type={"text"}
            value={Formik.values.phoneNumber}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Boolean(
              Formik.touched.phoneNumber && Formik.errors.phoneNumber
            )}
            helperText={Formik.touched.phoneNumber && Formik.errors.phoneNumber}
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
            helperText={Formik.touched.companyName && Formik.errors.companyName}
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
            } w-full center text-white rounded-full font-bold  px-4 py-2  border-b z-[999]`}
            type="submit"
            onClick={() => {
              prop.setIsOpen(false);
            }}
          >
            Submit
          </button>
        </form>
      </Dialog>
      
    </section>
    <Dialog
    fullWidth
    maxWidth={"sm"}
    open={isOtpOpen}
    onClose={() => {
      setIsOtpOpen(false);
    }}
  >
    <form action="" className="p-6" onSubmit={handleSubmit}>
        <h2 className="w-full text-center text-xl font-bold m-2 capitalize">please enter the OTP</h2>
    <input type="text" onChange={otpCheck} className="w-full h-16 border border-black m-2 rounded-md px-4" placeholder="enter the otp" />
    <button className="px-6 py-2 rounded-md bg-red-600 font-bold text-white m-2" type="submit" >submit</button>
    </form>
  </Dialog>
    </>
  );
}

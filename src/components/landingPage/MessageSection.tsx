import { Dialog, TextField } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { contactFormImg } from "@/src/assets/landinPage";
import axios from "axios";
type FormType = {
  name: string;
  email: string;
  subject: string;
  massage: string;
  otp: number;
};

export default function MessageSection() {
  const [post, setPost] = useState<any>();
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [newOtp, setNewOtp] = useState<any>(0);
  const [validateOtpNum, setValidateOtpNum] = useState<Number>();
  const [allData, setAllData] = useState<any>();
  useEffect(() => {
    fetch("http://admin.drsti-ooh.com:1337/contactforms", {
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

  const otpCheck = (event: any) => {
    setNewOtp(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (validateOtpNum == newOtp) {
      setIsOpen(false);
      setPost(allData);
      Swal.fire({
        title: "OTP Validated",
        text: "Thank you",
        icon: "success",
      });
    } else {
      alert("enter the valid OTP");
    }
  };
  // console.log(validateOtpNum)
  let initialValues: FormType = {
    name: "",
    email: "",
    subject: "",
    massage: "",
    otp: otpGenerator,
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
      try {
        setAllData(values);
        console.log(values);
        sendOTP();
        setIsOpen(true);
        setValidateOtpNum(formik.values.otp);
      } catch (err) {
        console.log(err);
      } finally {
        props.resetForm();
      }
    },
  });

  return (
    <section className="w-full  main-container flex flex-col items-center justify-center gap-16 lg:my-24 my-12">
      <div className="w-full center ">
        <h1 className="text-2xl lg:text-4xl  font-bold uppercase ">
          get in <span className="text-red-600">touch</span>{" "}
        </h1>
      </div>
      <section className="w-full h-auto lg:h-[70vh] flex flex-col lg:flex-row gap-6 lg:gap-4 items-center justify-center  lg:my-0  ">
        <div className="w-full h-auto lg:h-[70vh] bg-center bg-cover bg-no-repeat">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.410970674952!2d77.57361881534334!3d13.00948071756463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17df652ee8bd%3A0xfad4d2e0060724d2!2sdRSTi%20Communications!5e0!3m2!1sen!2sin!4v1677754505180!5m2!1sen!2sin"
            className="w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full h-auto lg:h-[70vh]">
          <span className=" bg-white w-full h-full p-6 flex flex-col items-start justify-center gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            {/* <p className="text-2xl text-red-600 tracking-wider uppercase">
              {`let's`} connect
            </p> */}
            <h1 className="text-2xl lg:text-4xl font-bold tracking-wide capitalize ">
              get free consultation
            </h1>
            <p className="lg:text-lg text-black ">
            Reach out & engage with working corporate professionals working in leading {`MNC's`} across India.
            </p>
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
                className="w-full rounded-md bg-gradient-to-r from-black to-red-600 text-white text-lg tracking-wider p-4 uppercase z-50"
                type="submit"
              >
                send message
              </button>
            </form>
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
          <h2 className="w-full text-center text-xl font-bold m-2 capitalize">
            please enter the OTP
          </h2>
          <input
            type="text"
            onChange={otpCheck}
            className="w-full h-16 border border-black m-2 rounded-md px-4"
            placeholder="enter the otp"
          />
          {/* <input type="number" name="otpnum" id="" onChange={validateOtp}   value={otpGenerator}/> */}
          <button
            className="px-6 py-2 rounded-md bg-red-600 font-bold text-white m-2"
            type="submit"
          >
            submit
          </button>
        </form>
      </Dialog>
    </section>
  );
}

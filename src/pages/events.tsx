import React from 'react'
import Blogpageiner from '../components/blogpage/Blogpageiner'
import Breadcrumb from '../components/events/Breadcrumb'
import EventDescription from '../components/events/EventDescription'
import EventForm from '../components/events/EventForm'
import EventImageSection from '../components/events/EventImageSection'
import MainLayout from '../layouts/MainLayout'

export default function Events() {
  return (
    <MainLayout>
      {/* <Breadcrumb/>
      <EventDescription/>
      <EventImageSection/>
      <EventForm/> */}
      {/* <Blogpageiner/> */}

      {/* import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import nodemailer from 'nodemailer';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your_email@gmail.com',
        pass: 'your_password',
      },
    });

    const mailOptions = {
      from: values.email,
      to: 'recipient_email@example.com',
      subject: `New message from ${values.name}`,
      text: values.message,
    };

    try {
      await transporter.sendMail(mailOptions);
      alert('Message sent successfully');
      resetForm();
    } catch (error) {
      alert('An error occurred while sending the message');
    }

    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" required />

          <ErrorMessage name="name" component="div" />

          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" required />

          <ErrorMessage name="email" component="div" />

          <label htmlFor="message">Message:</label>
          <Field as="textarea" id="message" name="message" required />

          <ErrorMessage name="message" component="div" />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </Form>
      )}
    </Formik>
  );
} */}

      
    </MainLayout>
  )
}

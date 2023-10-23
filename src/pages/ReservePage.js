import React, {useEffect, useState} from 'react'
import {useFormik} from "formik";
import * as Yup from 'yup';

export default function ReservePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfGuest, setNumberOfGuest] = useState("");
  const [occasion, setOccasion] = useState("");
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setDate("");
    setTime("");
    setNumberOfGuest("");
    setOccasion("");
    setMessage("");
  };
  
  const handleSubmit = (e) => {
    alert("Account created!");
    clearForm();
  };
  
  const formik = useFormik({
    initialValues: {
      firstName,
      lastName,
      email,
      date,
      time,
      numberOfGuest,
      occasion,
      message,
    },
    onSubmit: (values, actions,) => {
      handleSubmit(values);
      actions.resetForm();
    },
    
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required First name"),
      lastName: Yup.string().required("Required Last name"),
      email: Yup.string().email("Invalid email address").required("Required email"),
      date: Yup.date().typeError("Please enter a valid date, format: MM/DD/YYYY").required("Date is a requiered field"),
      time: Yup.string().required('Please choose the available time'),
      numberOfGuest: Yup.number()
        .required("Guests number is required")
        .min(1, "Number of Guests at least 1")
        .max(15, "Maximum number of Guests is 15"),
      occasion: Yup.string()
        .required()
        .oneOf(["birthday", "engagement", "anniversary"])
        .label("occasion")
    }),
  });
  
  return (
    <div className='mx-auto mt-6 mb-12 w-[400px] flex flex-col gap-6'>
      <p className='text-center text-2xl'>Reserve a table!</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e)
      }}>
        <div className="mb-6">
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
          <input type="text" id="firstName"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="First name"
                 value={firstName}
                 onBlur={formik.handleBlur}
                 onChange={(e) => {
                   formik.handleChange(e);
                   setFirstName(e.target.value);
                 }}
                 required/>
          {formik.errors.firstName && formik.touched.firstName && <p className="error">{formik.errors.firstName}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
          <input type="text" id="lastName"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="Last name"
                 value={lastName}
                 onBlur={formik.handleBlur}
                 onChange={(e) => {
                   formik.handleChange(e);
                   setLastName(e.target.value);
                 }}
                 required/>
          {formik.errors.lastName && formik.touched.lastName && <p className="error"> {formik.errors.lastName}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <input type="email" id="email"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="email@email.com"
                 value={email}
                 onBlur={formik.handleBlur}
                 onChange={(e) => {
                   formik.handleChange(e);
                   setEmail(e.target.value);
                 }}
                 required/>
          {formik.errors.email && formik.touched.email && <p className="error">{formik.errors.email}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Choose Date</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="date"
            type="date"
            id="date"
            value={date}
            onBlur={formik.handleBlur}
            onChange={(e) => {
              formik.handleChange(e);
              setDate(e.target.value);
            }}/>
          {formik.errors.date && formik.touched.date && <p className="error"> {formik.errors.date}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900">Choose Time</label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="time"
            name="time"
            value={time}
            onBlur={formik.handleBlur}
            onChange={(e) => {
              formik.handleChange(e);
              setTime(e.target.value);
            }}>
            <option>
              Please choose first the date
            </option>
            <option key={1}>10:00</option>
            <option key={2}>12:00</option>
            <option key={3}>14:00</option>
            <option key={4}>16:00</option>
            <option key={5}>18:00</option>
          </select>
          {formik.errors.time && formik.touched.time && <p className="error"> {formik.errors.time}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="guests" className="block mb-2 text-sm font-medium text-gray-900">Number of guests</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="number"
            placeholder="0"
            name="numberOfGuest"
            id="guests"
            value={numberOfGuest}
            onBlur={formik.handleBlur}
            onChange={(e) => {
              formik.handleChange(e);
              setNumberOfGuest(e.target.value);
            }}/>
          {formik.errors.numberOfGuest && formik.touched.numberOfGuest &&
            <p className="error"> {formik.errors.numberOfGuest}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="occasion" className='block mb-2 text-sm font-medium text-gray-900'>Occasion</label>
          <select
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            id="occasion"
            name="occasion"
            value={occasion}
            onBlur={formik.handleBlur}
            onChange={(e) => {
              formik.handleChange(e);
              setOccasion(e.target.value);
            }}>
            <option value="Select one">Select one</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>
          {formik.errors.occasion && formik.touched.occasion && <p className="error"> {formik.errors.occasion}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className='block mb-2 text-sm font-medium text-gray-900'>Additional requests </label>
          <textarea
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            name="message"
            id="message"
            rows="3"
            value={message}
            onBlur={formik.handleBlur}
            onChange={(e) => {
              formik.handleChange(e);
              setMessage(e.target.value);
            }}>
          </textarea>
          {formik.errors.message && formik.touched.message && <p className="error"> {formik.errors.message}</p>}
        </div>
        <button type="submit"
                className="text-white bg-[#f4ce14] disabled:bg-gray-500 hover:bg-[#eac107] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                disabled={Object.keys(formik.errors).length > 0}>
          Submit
        </button>
      </form>
    </div>
  )
}

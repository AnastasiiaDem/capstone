import React, {useEffect} from 'react'
import ReserveForm from "../components/ReserveForm";

export default function ReservePage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleSubmit = (e) => {
    console.log(e, "Form submitted!");
    alert("Account created!");
  };
  
  return (
    <div className='mx-auto mt-6 mb-12 w-[400px] flex flex-col gap-6'>
      <p className='text-center text-2xl'>Reserve a table!</p>
      <ReserveForm onSubmit={handleSubmit}/>
    </div>
  )
}

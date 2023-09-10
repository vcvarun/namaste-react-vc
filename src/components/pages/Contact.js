import React from 'react'

export const Contact = () => {
  return (
    <div className='text-center m-6'>
      <h1>Contact Us</h1>
      <input className="border border-slate-500 rounded-md" type="text" placeholder='name' />
      <input className="border border-slate-500 rounded-md" type="text" placeholder='age' />
      <button className="ml-2 bg-blue-500 px-2 rounded-sm text-white" type='Submit'>Submit</button>
    </div>
  );
};

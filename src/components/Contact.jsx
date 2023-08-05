import React from 'react';

const Contact = () => {
  const regExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleFormSubmit = (e) => {
    const inputBtn = document.getElementById('Email');
    const emailVal = inputBtn.value;

    if (!regExpression.test(emailVal)) {
      e.preventDefault();
    }
  };

  return (
    <div
      id='Contact'
      name='contact'
      className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/5d9440aa-8669-4a8e-995b-5653ff81c922'
        className='flex flex-col max-w-[600px] w-full'
        onSubmit={handleFormSubmit}
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            // Submit the form below or shoot me an email -
            vutukuri.kumar192st.niituniversity.in
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='name'
          minLength={4}
          required
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email'
          name='email'
          id='Email'
          required
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'
          required
          minLength={4}
        ></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

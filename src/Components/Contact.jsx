import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    
    <div className="max-w-md mx-auto mt-10 mb-10 bg-neutral-800 text-white w-[500px] h-[500px] rounded-lg flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="w-full flex justify-center"> {/* Changed from text-white w-full to w-full flex justify-center */}
  <div className="w-80 "> {/* Retained w-80 class for the inner div */}
    <label htmlFor="name" className="block text-white text-left">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="w-full  text-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
      placeholder="Your Name"
      required
    />
  </div>
</div>

        <div className="w-full flex justify-center"> {/* Changed from w-80 to w-full and added flex justify-center */}
  <div className="w-80"> {/* Retained w-80 class for the inner div */}
    <label htmlFor="email" className="block text-white text-left">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="w-full text-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
      placeholder="Your Email"
      required
    />
  </div>
</div>

        <div className="w-full flex justify-center"> {/* Changed from w-full to w-full flex justify-center */}
  <div className="w-80"> {/* Retained w-80 class for the inner div */}
    <label htmlFor="message" className="block text-white text-left">Message</label>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      className="w-full text-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
      rows="4"
      placeholder="Your Message"
      required
    ></textarea>
  </div>
</div>

        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="w-40 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
      
    </div>


   
  );
};

export default Contact;

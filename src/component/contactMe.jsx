import { Button } from "@material-tailwind/react";
import React from "react";


const ContactMe = () => {
  return (
    <div className="flex flex-col items-center py-16">
      <h2 className="text-2xl text-white font-semibold mb-4">📧 Contact Me</h2>
      <p className="text-gray-200 mb-6">
        Have a question or want to collaborate? Feel free to reach out!
      </p>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Cristiano"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="ronaldo@example.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            id="message"
            placeholder="Your message here..."
          />
        </div>
        <div className="flex justify-center">
         <Button color="white">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;

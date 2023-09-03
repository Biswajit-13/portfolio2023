
import React,{useState} from "react";
import { toast } from "react-toastify";
import { Button } from "@material-tailwind/react";

const ContactMe = () => {

  const [message, setMessage] = useState({
    name: "",email:"",text:""
  })

  const handleInputs = (e)=>{
    const id = e.target.id;
    const value  = e.target.value;
    setMessage({...message,[id]:value})
  }

  const handleSubmit = ()=>{
    if(message.text!="" && message.name!="" && message.email!=""){
       console.log("message sent", message)
    toast.success("Thank you for contacting 💓",{
      position: toast.POSITION.TOP_CENTER,
      autoClose:2000,
    });
    setMessage({
      ...message,
      text: "",
      name: "",
      email: "",
    });
    }
   else{
    toast.info("Don not leave an empty field🥺",{
    position: toast.POSITION.TOP_CENTER,
    autoClose:1500,
    })
   }
  }
  return (
    <div className="flex flex-col items-center py-16">
      <h2 className="text-2xl text-white font-semibold mb-4">📧 Contact Me</h2>
      <p className="text-gray-200 mb-6">
        Have a question or want to collaborate? Feel free to reach out!
      </p>
      <form className="w-full max-w-md" >
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
          required="true"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Cristiano"
            value={message.name}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
          required="true"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="ronaldo@example.com"
            value={message.email}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            id="text"
            placeholder="Your message here..."
            value={message.text}
            onChange={handleInputs}
          />
        </div>
        <div className="flex justify-center">
         <Button type="button"
         onClick={handleSubmit}
         color="white">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;

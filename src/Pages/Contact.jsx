import React, { useState } from "react";
import { GoPersonFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { Button, Textarea } from "flowbite-react";
import axios from "axios";

const Contact = () => {
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = 'service_3g4l3fs';
    const templateId = 'template_zul2rep';
    const publicKey = 'wNyu0LwCTsNMjwaRi';

    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
            from_name: username,
            from_email: email,
            to_name: 'Geetha'  ,
            message: message,      
        }
    };

    try{
        const res = await  axios.post("https://api.emailjs.com/api/v1.0/email/send",data);
        //console.log(res.data);
        if(res.data==="OK"){
            alert("Mail sent successfully...")
        }
        setUsername('');
        setEmail('');
        setMessage('');
    }
    catch(error){
        console.error(error);
    }
  };
  return (
    <div>
      <h1 className="text-fuchsia-900 font-bold text-4xl text-center font-serif mb-5">
        CONTACT ME
      </h1>
      <div className="flex md:flex-row md:justify-self-auto flex-col">
        <div className="px-10">
          <h3 className="font-bold text-2xl">Geetha P</h3>
          <ul className="flex flex-row pt-4">
            <li className="mt-1">
              <GoPersonFill />
            </li>
            <li>&nbsp;&nbsp;Web developer | &nbsp;&nbsp;Full Stack developer | &nbsp;&nbsp;Frontend developer</li>
          </ul>
          <ul className="flex flex-row pt-4">
            <li className="mt-1">
              <IoLocationSharp />
            </li>
            <li>&nbsp;&nbsp;Erode, Tamilnadu, India</li>
          </ul>
          <ul className="flex flex-row pt-4">
            <li className="mt-1">
              <IoMailSharp />
            </li>
            <li>&nbsp;&nbsp;geethumsp@gmail.com</li>
          </ul>
          {/* <ul className="flex flex-row pt-4">
            <li className="mt-1">
              <FaPhone />
            </li>
            <li>&nbsp;&nbsp;+91 98948 91753</li>
          </ul> */}
          <p className="pt-5">
            Feel free to reach out for opportunities, or just to say hello! I
            typically respond within 24 hours.
          </p>
        </div>
        <div className="p-5 px-10 w-80">
          <h4 className="text-fuchsia-900 font-semibold text-md font-serif mb-2">
            Get in touch
          </h4>
          <form className="" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full"
                required
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Leave a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <Button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Send Me
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// pages/contact.js
"use client"
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")




  const submit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": name,
      "email": email,
      "message": message
    })
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    fetch("/api/contact", requestOptions)
      .then(
        (response) => response.json()
      )
      .then((result) => {
        if (result.error == true & result.success == false) {

          toast.error(result.message)
        }
        else {
          setEmail("")
          setName("")
          setMessage("")
          console.log(result)
          toast.success(result.message)
        }



      })
      .catch((error) => {


        console.error(error)
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800 px-6 py-10">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-purple-600 mb-6 text-center">Contact Us</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={e => { setName(e.target.value) }}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e => { setEmail(e.target.value) }}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={e => { setMessage(e.target.value) }}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your message here..."
              rows="4"
            ></textarea>
          </div>
          <button
            onClick={submit}
            type="submit"
            className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-200"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

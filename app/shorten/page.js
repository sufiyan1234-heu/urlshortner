"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("")
  const [generated, setGenerated] = useState("")


  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    })
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    fetch("/api/generate", requestOptions)
      .then(
        (response) => response.json()
      )
      .then((result) => {

        if (result.error == true & result.success == false) {
          setGenerated("")
          toast.error(result.message)
        }
        else {
          setUrl("")
          setShorturl("")
          console.log(result)
          setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
          toast.success(result.message)
        }

      })
      .catch((error) => {
        toast.error(error)

        console.error(error)
      })
  }

  const handleCopy = () => {
    if (generated) {
      navigator.clipboard.writeText(generated)
        .then(() => {
          toast.success('copied to clipboard');
        })
        .catch(err => {
          toast.error('Error copying text: ', err);
        });
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-700">Generate your short URLs</h1>
        <div className="space-y-4">
          <input

            type="text"
            value={url}
            placeholder="Enter your URL"
            onChange={e => { setUrl(e.target.value) }}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="text"
            value={shorturl}
            placeholder="Enter your preferred URL text"
            onChange={e => { setShorturl(e.target.value) }}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            onClick={generate}
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700 transition duration-200">
            Generate
          </button>
          <div className='text-center py-4'>
            {
              generated && (<div className='flex items-center justify-center'>
                <code className='flex items-center justify-center'>
                  <p className='text-xs px-2'>Your Link:</p> <Link className='bg-gray-300 px-2 py-3 rounded-lg' target='_blank' href={generated}>{generated}</Link>
                </code>
                <button
                  onClick={handleCopy}
                  className="ml-4 bg-purple-600 text-white py-2 px-4 rounded"
                >
                  <i className="fa fa-clipboard" ></i>
                </button>
              </div>)
            }
          </div>
        </div>

      </div>

    </div>
  )
}

export default Shorten
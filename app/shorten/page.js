"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'




const shorten = () => {
    const [URL, setURL] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")

    const generate = () => { 
        const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": URL,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) =>{
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    setURL("")
    setshorturl("")

  
     alert(result.message)
    })
  .catch((error) => console.error(error));
     }

  return (
    <div className=' mx-auto max-w-lg w-100 bg-purple-100 my-14 p-7 rounded-xl flex flex-col gap-4'>

      <h1 className='font-bold text-xl'>Generate Your short URLs</h1>

      <div className='flex flex-col gap-2 '>

        <input value={URL} className='focus:outline-purple-600 bg-white rounded-md p-2' placeholder='Enter Your URL' type="text"
         onChange={e=>{setURL(e.target.value)}} />

        <input  value={shorturl} className='rounded-md bg-white focus:outline-purple-600 p-2 '  placeholder='Enter Your prefered short URL' type="text" 
        onChange={e=>{setshorturl(e.target.value)}}  />

        <button onClick={generate} className='my-2 text-white bg-purple-500 shadow-lg  rounded-lg w-full border border-white p-1'>Generate</button>

      </div>
      {generated && <>
       <div className='font-bold text-lg'> Your Link</div><code><Link target="_blank" href ={generated}>{generated}</Link>
        </code></>}
    </div>
  )
}

export default shorten 

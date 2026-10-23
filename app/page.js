import Image from "next/image";
import localFont from "next/font/local";
import Link from 'next/link'


const Poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function Home() {
  return (
  <main className="bg-purple-100 ">
    <section className="grid grid-cols-2 h-[50vh]">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className={`font-bold text-2xl ${Poppins.className}`}>The best URL shortener in the market</p>
        
        <p className="px-36 text-center">We are the most straight forward URL shortener in the world.Most of the url is very ugly in the world.balaji is a fullstack shanda Lorem ipsum dolor sit amet recusandae!</p>

        <li className='font-bold flex gap-3'>
           <Link href="/shorten"><button className='text-white bg-purple-500 shadow-lg  rounded-lg w-20 border border-white p-1'>Try now</button></Link>

           <Link href="/github"><button className='text-white bg-purple-500 shadow-lg  rounded-lg w-20 border border-white p-1'>Git Hub</button></Link>
        </li>
      </div>
      <div className="bg-blue-400 flex justify-start relative ">
        <Image className="mix-blend-darken" alt="an Image of a vector" fill={true} src={"/vector.avif"}/>
      </div>
    </section>
  </main>
  );
}

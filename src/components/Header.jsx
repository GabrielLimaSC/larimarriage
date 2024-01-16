"use client"

import { useState } from "react"
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Montserrat } from 'next/font/google'
import localfont from "next/font/local"

const montserrat = Montserrat({
    subsets: ['latin'],
    weights: [400, 700],
})

const highspirited = localfont({
    src: [
        {
            path: "../../public/fonts/High Spirited.ttf",
            weight: "700",
        },
    ],
    variable: "--font-high-spirited",
})


export default function Header() 
{
    const [menuIcon, setIcon] = useState( false );

    const handleSmallerScreenNavigation = () => 
    {
        setIcon( !menuIcon );
    }

    return (
        <header className=" bg-white text-[#000000] w-full ease-in duration-300 fixed top-0 left-0 z-10">
            <nav className=" max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4 lg:px-32">

                <div>
                    <Link href="/" onClick={handleSmallerScreenNavigation}>
                        <span className={`${highspirited.className} text-3xl md:text-2xl xl:text-[52px] uppercase fonte`}>L & P</span>
                    </Link>
                </div>

                {/* Larger screens navigaton */}
                <ul className={`${montserrat.className} hidden md:flex uppercase lg:text-[12px] text-slate-800`}>

                    <li className="mr-4 lg:mr-8 hove:text-[#000000]">
                        <Link href="/home">Páginas</Link>
                    </li>

                    <li className="mr-4 lg:mr-8 hove:text-[#000000]">
                        <Link href="/home">Presentes</Link>
                    </li>

                    <li className="mr-4 lg:mr-8 hove:text-[#000000]">
                        <Link href="/home">Confirmar presenca</Link>
                    </li>

                </ul>

                {/* smaller screens - navigaton icons */}
                {/* onClick change the icon */}
                <div onClick={handleSmallerScreenNavigation} className='flex md:hidden'>
                    {menuIcon ?
                        ( <AiOutlineClose size={25} className="text-[#000000]" /> ) 
                        :
                        ( <AiOutlineMenu size={25} className="text-[#000000]" /> )
                    }
                </div>

                {/* smaller screens - Navbar */}
                <div className={menuIcon ?
                    'md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-start items-start w-full h-screen bg-white text-[#000000] text-center ease-in duration-300'
                    :
                    'md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-start items-start w-full h-screen bg-white text-[#000000] text-center ease-in duration-300'
                }>
                    {/* Smaller screens - Navbar links */}
                    <div className="w-full">

                        <ul className="uppercase font-bold text-2xl">

                            <li onClick={handleSmallerScreenNavigation} className="py-5 hover:text-[#000000] cursor-pointer">
                                <Link href="/">Paginas</Link>
                            </li>

                            <li onClick={handleSmallerScreenNavigation} className="py-5 hover:text-[#000000] cursor-pointer">
                                <Link href="/">Presentes</Link>
                            </li>

                            <li onClick={handleSmallerScreenNavigation} className="py-5 hover:text-[#000000] cursor-pointer">
                                <Link href="/">Confirmar presenca</Link>
                            </li>

                        </ul>

                    </div>

                </div>


            </nav>
        </header>
    )
}
"use client"

import { useState } from "react"
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Montserrat } from 'next/font/google'
import localfont from "next/font/local"
import styles from './Header.module.css';
import { CSSTransition } from 'react-transition-group';

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

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Função para alternar a visibilidade do menu dropdown
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    

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

                    {/* Dropdown Menu Item */}
                    <li className="relative mr-4 lg:mr-8 uppercase">
                        <button onClick={toggleDropdown} className="flex items-center hove:text-[#000000] uppercase">
                            Páginas
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6"
                                className={`ml-1 fill-current text-gray-600 menu-dropdown__icon ${isDropdownOpen ? styles['menu-dropdown__icon--up'] : styles['menu-dropdown__icon--down']}`}>
                                <path fillRule="evenodd" d="M5.95.335l4.717 4.912a.302.302 0 0 1 0 .416.274.274 0 0 1-.4 0L5.75.961 1.234 5.663a.274.274 0 0 1-.4 0 .303.303 0 0 1-.084-.207c0-.074.027-.15.084-.207L5.55.337A.274.274 0 0 1 5.95.335z"></path>
                            </svg>
                        </button>

                        <CSSTransition 
                            in={isDropdownOpen} 
                            timeout={300} 
                            classNames={{
                                enter: styles['dropdown-enter'],
                                enterActive: styles['dropdown-enter-active'],
                                exit: styles['dropdown-exit'],
                                exitActive: styles['dropdown-exit-active']
                            }}
                            unmountOnExit
                            >
                                <ul className=" absolute left-0 mt-2 py-2 w-40 bg-white drop-shadow-2xl">
                                    <br />
                                    <li className="py-1 px-4 hover:bg-gray-100">
                                        <Link href="/pagina1">Página 1</Link>
                                    </li>
                                    <br />
                                    <li className="py-1 px-4 hover:bg-gray-100">
                                        <Link href="/pagina2">Página 2</Link>
                                    </li>
                                    {/* ... */}
                                </ul>
                            </CSSTransition>
                    </li>

                    <li className="mr-4 lg:mr-8 hove:text-[#000000]">
                        <Link href="/home">Presentes</Link>
                    </li>

                    <li className="mr-4 lg:mr-8 hove:text-[#000000]">
                        <Link href="/home">Confirmar presença</Link>
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

                        <ul className={`${montserrat.className} uppercase lg:text-[12px] text-slate-800`}>

                            <li className="relative px-3 mr-4 lg:mr-8 uppercase">
                                <button onClick={toggleDropdown} className="flex items-center hover:text-[#000000] uppercase">
                                    Páginas
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6"
                                        className={`ml-1 fill-current text-gray-600 menu-dropdown__icon ${isDropdownOpen ? styles['menu-dropdown__icon--up'] : styles['menu-dropdown__icon--down']}`}>
                                        <path fillRule="evenodd" d="M5.95.335l4.717 4.912a.302.302 0 0 1 0 .416.274.274 0 0 1-.4 0L5.75.961 1.234 5.663a.274.274 0 0 1-.4 0 .303.303 0 0 1-.084-.207c0-.074.027-.15.084-.207L5.55.337A.274.274 0 0 1 5.95.335z"></path>
                                    </svg>
                                </button>

                                <CSSTransition 
                                    in={isDropdownOpen} 
                                    timeout={300} 
                                    classNames={{
                                        enter: styles['dropdown-enter'],
                                        enterActive: styles['dropdown-enter-active'],
                                        exit: styles['dropdown-exit'],
                                        exitActive: styles['dropdown-exit-active']
                                    }}
                                    unmountOnExit
                                    >
                                        <ul className=" absolute left-0 mt-2 py-2 w-40 bg-white drop-shadow-2xl">
                                            <br />
                                            <li className="py-1 px-4 hover:bg-gray-100">
                                                <Link href="/pagina1" >Página 1</Link>
                                            </li>
                                            <br />
                                            <li className="py-1 px-4 hover:bg-gray-100">
                                                <Link href="/pagina2">Página 2</Link>
                                            </li>
                                            {/* ... */}
                                        </ul>
                                    </CSSTransition>
                            </li>

                            <li onClick={handleSmallerScreenNavigation} className="flex items-center uppercase py-3 px-3  cursor-pointer">
                                <Link href="/">Presentes</Link>
                            </li>

                            <li onClick={handleSmallerScreenNavigation} className="flex items-center uppercase py-2 px-3 cursor-pointer">
                                <Link href="/">Confirmar presença</Link>
                            </li>

                        </ul>

                    </div>

                </div>


            </nav>
        </header>
    )
}
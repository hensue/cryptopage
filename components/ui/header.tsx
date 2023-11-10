'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'
import '../font.css'

export default function Header() {

  const styles = {
    fontFamily: 'CustomFont, sans-serif',
    fontSize: '25px',
    color: 'black'
  };

  const fontStyle = {
    fontFamily: 'NavFont, sans-serif',
    color: 'black'
  }

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-black-500 backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-8 inline-flex items-center space-x-4">
            <Logo />
            <div style={styles}>
              Crypto Expo Disk
            </div>
          </div>


          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-start space-x-8 flex-wrap items-center">

              {/* <li>
                <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li> */}
              <li>
                <a href="#page-top">
                  <span style={fontStyle} className="page-scroll">
                    <span className="text-lg  inline-block relative group">
                      Home
                      <span className="absolute inset-x-0 bottom-0 h-1 bg-pink-500 transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <span style={fontStyle} className="page-scroll">
                    <span className="text-lg  inline-block relative group">
                      About Event
                      <span className="absolute inset-x-0 bottom-0 h-1 bg-pink-500 transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#topic">
                  <span style={fontStyle} className="page-scroll">
                    <span className="text-lg  inline-block relative group">
                      Topic
                      <span className="absolute inset-x-0 bottom-0 h-1 bg-pink-500 transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#speakers">
                  <span style={fontStyle} className="page-scroll">

                    <span className="text-lg  inline-block relative group">
                      Speakers
                      <span className="absolute inset-x-0 bottom-0 h-1 bg-pink-500 transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#sponsors">
                  <span style={fontStyle} className="page-scroll">
                    <span className="text-lg  inline-block relative group">
                      Sponsors
                      <span className="absolute inset-x-0 bottom-0 h-1 bg-pink-500 transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                {/* <Link href="/signin">
                  <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md ml-4">
                  Register Now
                  </button>
                </Link> */}
              </li>
            </ul>

          </nav>

          {/* <MobileMenu /> */}

        </div>
      </div>
    </header>
  )
}

'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'
import './font.css'


export default function Features() {

  const styles = {
    fontFamily: 'Date, sans-serif',
    fontSize: '20px',
    color: 'black'
  }

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative">
      <div id="about">
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute inset-0 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
        {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-10">
              <h1 className="h2 mb-4">About Event</h1>
              {/* <p className="text-xl text-gray-600">Crypto Expo Disk  is the blockchain conference network bringing together the key players of crypto industry and experts to redefine the future of finance.<br></br> The edition of the Crypto Expo Disk will take place during on December 25, 2023 in Dubai, with the world’s top crypto companies and blockchain entrepreneurs. Today, UAE, specifically Dubai is gearing up to become a global crypto hub. Thus, Crypto Expo Disk will be the gathering in the region on behalf of the world of blockchain and cryptocurrency, with a wide range of topics focused on the financial technologies of the future, extensive networking opportunities and participation from more than 40 countries.</p> */}
            </div>
            <div className="flex space-x-8">
              <div className="flex-1" data-aos="fade-right" data-aos-delay="600">
                <img src="/images/blockchain.jpg" className='rounded-lg' alt="" />
              </div>
              <div className="flex-1 flex items-center justify-center" data-aos="fade-left" data-aos-delay="900">
                <p className="text-xl text-black-600 text-center" style={styles}>
                  Crypto Expo Disk  is the blockchain conference network bringing together the key players of crypto industry and experts to redefine the future of finance.<br></br>The edition of the Crypto Expo Disk will take place during on December 25, 2023 in Dubai, with the world’s top crypto companies and blockchain entrepreneurs.
                </p>
              </div>
            </div>
            <div className="flex space-x-8">

              <div className="flex-1 flex items-center justify-center" data-aos="fade-right" data-aos-delay="900">
                <p className="text-xl text-black-600 text-center" style={styles}>
                  Today, UAE, specifically Dubai is gearing up to become a global crypto hub. Thus, Crypto Expo Disk will be the gathering in the region on behalf of the world of blockchain and cryptocurrency, with a wide range of topics focused on the financial technologies of the future, extensive networking opportunities and participation from more than 40 countries.
                </p>
              </div>
              <div className="flex-1" data-aos="fade-left" data-aos-delay="600">
                <img src="/images/29169.jpg" className='rounded-lg' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
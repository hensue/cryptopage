'use client'
import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'

import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-modern-modal';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './font.css'
import './background.css'
import './title.css'
import './register_btn.css'
import { colors } from '@mui/material';

export default function Hero() {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const styles = {
    fontFamily: 'title, sans-serif',
    fontSize: '30px',
    color: 'white'
  }

  const topic = {
    fontFamily: 'title, sans-serif',
    fontSize: '55px',
    color: 'white',
    marginTop: 50
  }
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div> */}
      <div className='image-bg'>


        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Hero content */}

          <div className="pt-28 pb-12 md:pt-30 md:pb-20">

            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              {/* <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Make your website <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">wonderful</span></h1> */}
              <div className='leading-[1.5]' data-aos="zoom-y-out" data-aos-delay="100" style={styles}>December 25, 2023 at 6:30 pm - Dubai, ATLANTIS, THE PALM</div>
              <div className="">
                {/* <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p> */}
                <div data-aos="zoom-y-out" data-aos-delay="500" >
                  {/* Identifying the <br/>game-changing trends in the web 3.0 ecosystem */}
                  {/* <div className="text-center bg-transparent py-8">
                    <h1 className=" text-white">
                      Identifying the<br></br> <span className="text-yellow-400">game-changing</span> trends in the web <span className="text-yellow-400">3.0</span> ecosystem
                    </h1>
                  </div> */}
                  <div className='text-center' style={topic}>
                    <div className='threeD1'>
                      Identifying the
                    </div>
                    <div className='threeD2'>
                      game-changing trends in the
                    </div>
                    <div className='threeD3'>
                      web 3.0 ecosystem
                    </div>
                  </div>

                </div>
              </div>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-12">
                {/* <div>
                  <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md" data-aos="zoom-y-out" data-aos-delay="700" onClick={handleOpen}>
                    Register Now
                  </button>
                  
                </div> */}
                {/* <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div> */}
                <div className="flex items-center justify-center">

                  <div className="b animate-bounce mx-auto h-16 w-64 flex justify-center items-center">
                    <div className="i h-16 w-64 bg-gradient-to-tl from-violet-500 to-fuchsia-500 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                    </div>
                    <button className="text-center text-white font-semibold z-10 flex justify-content items-center" onClick={handleOpen}>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users mr-2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </span>
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalBody>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="number"
                    label="Phone Number"
                    id="number"
                  // autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </ModalBody>
            <ModalFooter>
              {/* <button onClick={handleClose}>Close</button>
                <button onClick={handleClose}>Add</button> */}
            </ModalFooter>
          </Modal>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}

        </div>

      </div>
    </section >
  )
}